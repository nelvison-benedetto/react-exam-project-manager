import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();
export default function GlobalProvider({children}){

    const [users, setUsers] = useState([]);
    const groupUsersState = {users, setUsers};  //group all in 1 var

    const [persons, setPersons] = useState([]);
    const groupPersonsState = {persons, setPersons};  //group all in 1 var

    const [companies, setCompanies] = useState([]);
    const groupCompaniesState = {companies, setCompanies};  //group all in 1 var

    const [clients, setClients] = useState([]);
    const groupClientsState = {clients, setClients};  //group all in 1 var


    //FETCHS
    function fetchUsers(){
        fetch('http://localhost:8080/api/users')
        .then(res=>res.json())
        .then(response=>{
            setUsers(response)  //use instead responde.data if you receive an array {"data": [...]}
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        })
    }
    
    function fetchPersons(){
        fetch('http://localhost:8080/api/persons')
        .then(res=>res.json())
        .then(response=>{
            setPersons(response)  //use instead responde.data if you receive an array {"data": [...]}
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        })
    }

    function fetchCompanies(){
        fetch('http://localhost:8080/api/companies')
        .then(res=>res.json())
        .then(response=>{
            setCompanies(response)  //use instead responde.data if you receive an array {"data": [...]}
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        })
    }

    function fetchClients(){
        fetch('http://localhost:8080/api/clients')
        .then(res=>res.json())
        .then(response=>{
            setClients(response)  //use instead responde.data if you receive an array {"data": [...]}
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        })
    }


    //USE EFFECTS

    useEffect(() => {
        //fetchUsers();
        fetchPersons();
        //console.log("Fetched users:", users);
        fetchCompanies();
        fetchClients();
    }, []);  //first build



    return(
        <GlobalContext.Provider value={{groupUsersState, groupPersonsState, groupCompaniesState, groupClientsState}}>  
            {children}
        </GlobalContext.Provider>
    );
}

// in target file x destructure const {groupUsersState} = useContext(GlobalContext); const {users, setUsers} = groupUsersState;