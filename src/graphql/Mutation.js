import { gql } from '@apollo/client';


export const REGISTRATION = gql`
  mutation register($email:String!,$username:String!,$firstName:String!,$lastName:String!,$phone:String!, $password1:String!, $password2:String!,$cell:String!,$day:String!,$year:String!,$psw:String! ){
    register(email :$email,username:$username,firstName:$firstName,lastName:$lastName,phone:$phone,password1:$password1,password2:$password2 ,cell:$cell ,day:$day,year:$year,psw:$psw) 
    {
      success
      errors
      
    }
  }
`;

 

 

export const ADDFORM = gql`
mutation AddFormation($email:String!,$firstName:String!,$lastName:String!,$phone:String!,$choices:String!){
  AddFormation(email:$email,firstName:$firstName,lastName:$lastName,phone:$phone,choices:$choices) 
  {
    location {
    id
    email
    lastName
    firstName
    phone
    choices
  }
  }
}
`;

