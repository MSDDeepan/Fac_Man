// import axios from 'axios'
export default
{
    name: "LoginComponent",
    data()
    {
        return{
            email:"",
            password:"",
            user_Details:
            {
                email:"archana@gmail.com"
            }

        }
    },
    mounted(){
        console.log("mounted login")
    },
    methods:
    {
         Login()
        {
        //  axios.post(`http://10.30.1.107:8000/user/authUser?email=${this.email}&password=${this.password}`).then((response)=>
        //  {
        //     console.log(response.data.userData)
        //  })
            if(this.email===this.user_Details.email)
            {
                 this.$router.push({path: "/User"})
            }
            else{
                alert("invalid details")
            }    

            
            
        }

    }

}