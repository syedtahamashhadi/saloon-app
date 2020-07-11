import gql from 'graphql-tag'


const Queries = {

    GET_NEAREST_SALOON : gql `
                            query abc($latitude: Float! , $longitude: Float!){
                                getNearestSalons(latitude: $latitude, 
                            longitude: $longitude){
                                _id
                                displayName
                                rating
                                backgroundProfileImage
                                distance
                                profileImage
                                portfolioImages
                                managerName
                                managerImage
                                status
                                address
                                contactNo
                                services{
                                    name
                                    _id
                                    discription
                                    approxTime
                                    price
                                    serviceIcon
                                }
                                serviceProviders{
                                    firstName
                                    lastName
                                    _id
                                    status
                                    rating
                                    profileImageURL
                                    ratingCounter
                                    services{
                                        _id
                                        name
                                        approxTime
                                        price
                                        status
                                        discription
                                        serviceIcon
                                    }
                                }
                                location{
                                    type
                                    coordinates
                                }
                                }
                            }
    ` ,


    GET_USER_PROFILE : gql`
                        {
                            getUserProfile{
                                _id
                                email
                                password
                                jwtToken{
                                    token
                                }
                                firstName
                                lastName
                                phone
                                profileImageURL
                                gender
                                country
                                city
                                dateOfBirth
                                language     
                            }
                        }
    ` ,


    GET_USER_BOOKING : gql `

                        query abc($userId: String){
                            getUserAppointment(userId: $userId){
                            user{
                                email
                            }
                            appointmentDateTime
                            _id
                            treatment
                            status
                            timeZone
                            price
                            isReward
                            isPromoCode
                            createdAt
                            appointmentDateTime
                            appointmentTriggerTime
                            serviceId
                            salon{
                                _id
                                displayName
                                address
                                contactNo
                            }
                            serviceProvider{
                                _id
                                firstName
                                lastName
                            }
                            services{
                                _id
                                name
                                discription
                                serviceIcon
                                price
                            }
                            }
                    }
    ` ,


    GET_HELP_TOPICS : gql `
                        {
                            getHelpTopic {
                                title
                                description
                            }
                        }
    ` ,


}

export default Queries ;
