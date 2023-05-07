import React, { useEffect, useState } from "react";
import Storage from "../utils/Storage";






const IsCheckLogin = {
  
  async getId() {
   
     let login = Storage.get("login").then((e)=>{
        console.log(e);
        return e;
      }).catch((e)=>{
        console.log("islogin 실패")
      })
      
      return login.id;
   
  }


};


export default IsCheckLogin;


