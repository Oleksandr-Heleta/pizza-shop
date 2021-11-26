const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0 
};
const getSumAndCount = (items) =>{
    const countArr = Object.values(items).flat();
    const totalSum = countArr.reduce((sum, obj) => (obj.totalPrice + sum), 0);
    const totalCount = countArr.reduce((sum, obj) => (obj.totalCount + sum), 0);
    return [totalSum, totalCount]
};

const cart = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_PIZZA_CART': {
           
            const firstItem = {
                ...action.payload,
                totalPrice: action.payload.price,
                totalCount: 1,
            }
            const nextItem = () =>{
                let flag = false;
                const modItemsArr = state.items[action.payload.id].map(obj => {
                    if (obj.type === action.payload.type && obj.size === action.payload.size ) { 
                        flag = true;
                        obj.totalCount += 1;
                        obj.totalPrice += obj.price;
                        return  obj;
                       } 
                    return  obj;  
                });
                
                  return !flag ? [
                    ...state.items[action.payload.id],
                    firstItem
                  ] : modItemsArr;
            }
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                 ?  [ firstItem]
                 : nextItem()
            }
            const sumAndCount = getSumAndCount(newItems)
         return {
            ...state,
            items: newItems,
            totalCount: sumAndCount[1],
            totalPrice: sumAndCount[0]  
         }    
        };

        case 'CLEAR_CART': return {
            ...state,
            items: {},
            totalPrice: 0,
            totalCount: 0 
            
        };

        case 'REMOVE_CART_ITEM':  {
            const filterItems = state.items[action.payload.id].filter(obj => 
                !(obj.type === action.payload.type && obj.size === action.payload.size) 
            );
            const newItems = {
                ...state.items,
                [action.payload.id]: filterItems
            };
            if (newItems[action.payload.id].length < 1) {
                delete newItems[action.payload.id];
            }
            const sumAndCount = getSumAndCount(newItems)
            return {
               ...state,
               items: newItems,
               totalCount: sumAndCount[1],
               totalPrice: sumAndCount[0]  
            };   
           };

        case 'REMOVE_PIZZA_CART': { 
            let ind;
            const remoweInItems = state.items[action.payload.id].map((obj, index) => {
                if (obj.type === action.payload.type && obj.size === action.payload.size ) { 
                    ind = index;
                    obj.totalCount -= 1;
                    obj.totalPrice -= obj.price;
                    return  obj;
                   }  
                return obj; 
            });
            
            if (remoweInItems[ind].totalCount < 1)  {remoweInItems.splice(ind, 1)} ;
            const newItems = {
                ...state.items,
                [action.payload.id]: remoweInItems,
            };
            
            if (newItems[action.payload.id].length < 1) {
                delete newItems[action.payload.id];
            }
            const sumAndCount = getSumAndCount(newItems)
            return {
               ...state,
               items: newItems,
               totalCount: sumAndCount[1],
               totalPrice: sumAndCount[0]  
            };
        };

        default: return state;
    }

   
};
 
export default cart; 