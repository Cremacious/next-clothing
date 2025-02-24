import { getOrderById } from "@/lib/actions/order.actions";
import {notFound} from 'next/navigation'
import { ShippingAddress } from "@/types";


export const metadata = {
    title: 'Order Details'
}

const OrderDetailsPage = async (props: {
    params: Promise<{id: string}>
}) => {

    const {id} = await props.params
    const order = await getOrderById(id)
    if (!order) notFound()

    return ( <>
    
    
{id}

    </> );
}
 
export default OrderDetailsPage;