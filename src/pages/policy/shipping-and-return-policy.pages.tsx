import styled from "styled-components"

const Logo = styled.div`
  font-family: SentientReg, sans-serif;
  font-size: 24px;
  text-align: center;
`

const ShippingReturnPolicy = () => {
  return (
    <>
        <Logo>
            SAINTS UNDONE
        </Logo>

        <p style={{fontWeight: 600}}>
            SHIPPING & RETURNS
        </p>
        <p>
            As soon as an order is accepted, the delivery time for your shipment will begin. This includes a period of 2 working days in which our warehouse will process and dispatch your shipment from Monday through Friday. In case of restocking, the shipment period may take longer and one of our staff members will send you a notification of delay via email.
        </p>        
        <p>
            If an item in your order isn’t immediately available in our warehouse, then please allow 1 to 2 weeks for your purchase to be processed. Your order may be processed in multiple shipments, in which case you will be notified of the tracking number when each shipment occurs.
        </p>
        <p>
        We provide free standard shipping globally. For express delivery, the shipping charges will be borne by the customer.
        </p> 

        <p style={{fontWeight: 600}}>
            Taxes and Duties
        </p>
        <p>
            The prices of products are inclusive of taxes but exclude customs duties. All applicable duties shall be borne by the customer.
        </p> 

        <p style={{fontWeight: 600}}>
            Replacements and Exchanges
        </p>
        <p>
            India – 30 days replacements from the date of product delivered.
        </p>   
        <p>
            International – 30 days replacements from the date of product delivered.
        </p>  
        <p>
            Shipping charges for replacement requests will be borne by Almost Gods. Exchanges will be processed only for the same amount as the original order value or a higher amount. 
        </p> 
        <p>
            Exchange orders are not eligible for returns or store credit. Exchanges are final and cannot be reversed for a refund once initiated.
        </p>
        <p>
            Please note that the product must be returned unused and all tags and labels should be attached.
        </p> 

        <p style={{fontWeight: 600}}>
            Returns and Refunds
        </p>
        <p>
            India – Items once delivered can't be returned, it can only be replaced.
        </p>   
        <p>
            International – Items once delivered can't be returned, it can only be replaced.
        </p>  
        <p>
            No return, No refund!    
        </p>   
    </>
  )
}

export default ShippingReturnPolicy