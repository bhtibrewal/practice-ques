import "./styles.css";

export default function App() {
    const cartItems = [
        {
            id: "101",
            name: "Oreo",
            count: 2,
            price: 30.0,
            discount: 0.18
        },
        {
            id: "102",
            name: "Red Bull",
            count: 1,
            price: 99.0,
            discount: 0.15
        },
        {
            id: "103",
            name: "Dairy Milk Silk",
            count: 3,
            price: 175.0,
            discount: 0.05
        },
        {
            id: "104",
            name: "Pulse Candy Pack",
            count: 1,
            price: 135.0,
            discount: 0.2
        }
    ];
    /* num of items in the cart */
    function NumOfItems() {
        return (
            <div>
                {cartItems.forEach((names) => {
                    return <div>{names}</div>;
                })}
                No. of items: {cartItems.length}{" "}
            </div>
        );
    }
    /* calc cart total and total tax amount */
    function CartTotal() {
        var total = 0;
        cartItems.forEach((data) => (total += data.price));
        return (
            <>
                <div>Cart Total: {total} </div>
                <div>Total Tax Amount: {total * 0.18}</div>
            </>
        );
    }
    function TotalDisc() {
        var total = 0;
        cartItems.forEach((data) => {
            total += data.price * data.discount;
        });
        return <div>Total Discounted value: {total}</div>;
    }
    return (
        <div className="App">
            <ul>
                Given an array of objects of items in cart, print:{" "}
                <li>the total No. of items </li>
                <li>the total cart value</li>
                <li>
                    {" "}
                    the total discounted value(sum of dicounted values on each item){" "}
                </li>
                <li>
                    based on the given discount total tax amount (18% tax, calculated on
                    total cart value)
                </li>
            </ul>
            <NumOfItems />
            <CartTotal />
            <TotalDisc />
        </div>
    );
}
