const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0 
};

const cart = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_PIZZA_CART': {
           
            const firstItem = {
                ...action.payload,
                totalPrice: action.payload.price,
                totalCount: 1,
            }
            const secondItem = () =>{
                let flag = false;
                state.items[action.payload.id].map(obj => {
                    if (obj.type === action.payload.type && obj.size === action.payload.size ) { 
                        flag = true;
                        obj.totalCount += 1;
                        obj.totalPrice += obj.price;
                        return  obj;
                       }   
                });
                
                  return !flag ? [
                    ...state.items[action.payload.id],
                    firstItem
                  ] : state.items[action.payload.id]
            }
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                 ?  [ firstItem]
                 : secondItem()
            }
            const countArr = Object.values(newItems).flat();
            const totalSum = countArr.reduce((sum, obj) => (obj.totalPrice + sum), 0);
            const totalCount = countArr.reduce((sum, obj) => (obj.totalCount + sum), 0);
         return {
            ...state,
            items: newItems,
            totalCount: totalCount,
            totalPrice: totalSum  
         }    
        };
        case 'CLEAR_CART': return {
            ...state,
            items: {},
            totalPrice: 0,
            totalCount: 0 
            
        };
        case 'REMOVE_CART_ITEM':  {
            const newItems = state.items[action.payload.id].filter(obj => 
                obj.type !== action.payload.type && obj.size !== action.payload.size 
            );
            const allPizzas = {
                ...state.items,
                [action.payload.id]: newItems
            };
            const countArr = Object.values(allPizzas).flat();
            const totalSum = countArr.reduce((sum, obj) => (obj.totalPrice + sum), 0);
            const totalCount = countArr.reduce((sum, obj) => (obj.totalCount + sum), 0);
            
            return {
            ...state,
            items:{
                ...state.items,
                [action.payload.id]: newItems
            },
            totalCount: totalCount,
            totalPrice: totalSum
        }};
        case 'REMOVE_PIZZA_CART':  return {
            ...state,
            totalCount: action.payload,
        };
        default: return state;
    }

   
};
 
export default cart; 