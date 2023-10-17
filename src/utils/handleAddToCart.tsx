import React from 'react';
const handleAddToCart = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.persistedUserReducer);
    const { data, isLoading } = useGetFeaturedProductsQuery(undefined);
    // console.log("Featured Data", data);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <p>Hello</p>
    );
};

export default handleAddToCart;