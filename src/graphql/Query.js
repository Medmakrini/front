import gql from 'graphql-tag'

export const FETCH_ME =gql`
query{
  me{
   pk
   username
   firstName
   lastName
   email
   phone
   isStaff
   farmSet {
      id
    }
 } 
}
`;
export const FETCHTODOS =gql`
query{
  me {
  pk
   todolistSet {
    isdone
    id
    date
    name
    description
   }
  }
}
`;
export const FETCH_FARMS =gql`
query{
  me {
   farmSet {
    token
    culture
    work
    id
    name
    description
    
    machineSet{
     id
     name
    description
    }

    locationSet{
      longitude
      latitude
    }
    workerSet{
      id
      firstName
      secondName
      code
      startWork
      workField
      presencedateSet{
        date
        hoursofWork
      }
    }
   }
  }
}
`;;

export const ALLUSERS =gql`
query{
  users {
    edges {
      node {
        id
        pk
        username
        farmSet {
          id
        }
        firstName
        lastName
        phone
        email
        lastLogin
        dateJoined
        verified
      	
      }
    }
  }
}
`;