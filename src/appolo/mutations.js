import gql from 'graphql-tag'

const Mutations = {
    SIGNIN : gql `
                mutation abc ($email: String!, $password: String!, $deviceId: String!){
                    loginUser(email: $email, 
                password: $password, deviceId: $deviceId)
                    {
                    _id
                    email
                    jwtToken {
                        token
                        createdAt
                    }
                    password
                    userName
                    profileImageURL
                    }  
                }
    ` ,

    OTP : gql `
            mutation abc($email: String! , $code: String! , $deviceId: String!){
                verifyCode(email: $email, code: $code, deviceId: $deviceId) 
                {
                    
                    _id
                    email
                    jwtToken {
                    token
                    createdAt
                    }
                    password
                    userName
                    firstName
                    lastName
                    profileImageURL
                }
            }
    ` ,

    LOGOUT : gql `
                mutation abc($deviceId: String!) {
                logout(deviceId: $deviceId)
                {
                _id
                email
                }  
            }
  

    ` ,

    FORGOT_PASSWORD : gql `
                        mutation abc($email: String!) {
                            resetPassword(email: $email)
                            {
                            email
                            userName
                            }  
                        }
    ` ,


    UPDATE_PASSWORD : gql`
                        mutation abc($email:String! , $code:String! , $newPassword:String! , $reenterPassword:String!) {
                            updatePassword(email: $email,
                        code: $code, newPassword: $newPassword, 
                        reenterPassword: $reenterPassword)
                            {
                            email
                            }  
                        }
    ` ,


    SIGNUP : gql `
                mutation abc(
                    $email: String!
                    $password: String!
                    $firstName: String!
                    $lastName: String!
                    $phone: String!
                ) {
                    signupUser(
                        email: $email
                        password: $password
                        firstName: $firstName
                        lastName: $lastName
                        phone: $phone
                    )
                    {
                    email
                    }  
                }
    ` ,


    SEND_COMPLAIN : gql `
                        mutation abc($id: String! , $desc: String!) {
                            addComplaints(salonId: $id, discription: $desc)
                            {
                            _id
                            }  
                        }
    ` ,


    // ADD_APPOINMENT : gql `
    //                     mutation abc($salonId: String! , $serviceProviderId: String! , 
    //                             $timeZone: String! , $services: [String] , $cardId: String! , $appointmentDateTime: DateTime! ,
    //                             $price: Float!) {
    //                         addAppointment(salonId:$salonId, 
    //                     serviceProviderId: $serviceProviderId , timeZone: $timeZone, 
    //                         services: $services, cardId: $cardId, appointmentDateTime: $appointmentDateTime, price:$price)
    //                         {
    //                         status
    //                         salon
    //                         {
    //                             displayName
    //                         }
    //                         services{
    //                             _id
    //                             name
    //                             discription
    //                         }
    //                         }  
    //                     } 
    // ` ,

    ADD_APPOINMENT : gql `
                        mutation abc($salonId: String! , $serviceProviderId: String! , 
                                $timeZone: String! , $services: [String] , $cardId: String! , $customerId: String!
                                 $appointmentDateTime: DateTime! , $amount: Float! , $promoCode: String) {
                            addAppointment(salonId:$salonId, 
                        serviceProviderId: $serviceProviderId , timeZone: $timeZone, 
                            services: $services, cardId: $cardId, customerId: $customerId, 
                                appointmentDateTime: $appointmentDateTime, amount:$amount, promoCode:$promoCode)
                            {
                            status
                            salon
                            {
                                displayName
                            }
                            services{
                                _id
                                name
                                discription
                            }
                            }  
                        } 
    ` ,


    CANCEL_APPOINMENT : gql `
                            mutation abc($id: String!) {
                                cancelAppointment(appointmentId:$id) {
                                    status
                                }  
                            }
    ` ,

    
    RESCHEDULE_APPOINTMENT : gql `
                                mutation abc($id: String! , $dateTime: DateTime!) {
                                    postpondAppointment(
                                appointmentId:$id, appointmentDateTime: $dateTime)
                                    {
                                    _id
                                    }  
                                }
    ` ,


    ADD_MOMENTS : gql `
                    mutation abc($beforeUrl: String! , $afterUrl:String!) {
                        addMoments(salonId:"5e352f43e998cb2157837b28", beforeImageURL:$beforeUrl , afterImageURL:$afterUrl)
                        {
                        _id
                        }  
                    }
    ` ,

    ADD_PAYMENT_CARD : gql `
                        mutation abc($number: String , $exp_month: String , $exp_year: String , $cvc: String , $cardHolderName: String) {
                            addCardToken(number: $number, exp_month: $exp_month  , exp_year: $exp_year , cvc: $cvc , cardHolderName:$cardHolderName)
                            {
                            cards{
                                cardId
                            }
                            customerId
                            }  
                        }
    
    ` ,

    APPLY_PROMO_CODE : gql `
                        mutation abc($price: Float , $promoCode: String) {
                            applyPromoCode(price:$price, promoCode: $promoCode)
                            {
                            _id
                            discountedPrice
                            }  
                        }
    `

} 

export default Mutations ;