import React from 'react'
import './Home.css'

const Home = () => {
    const collection=[{Name:'Pairabi Paudel', Address:'Bharatpur',phoneNo:'987654321',gender:'Female'},
        {Name:'Rabi Acharya', Address:'India',phoneNo:'987654321',gender:'Male'}
        ,{Name:'Sita Gupta', Address:'Dolpa',phoneNo:'987654321',gender:'Female'}
        ,{Name:'Ram Khadka', Address:'Manang',phoneNo:'987654321',gender:'Male'},
        {Name:'Nabina Bhattarai', Address:'Mustang',phoneNo:'987654321',gender:'Female'},
        {Name:'Nabin Pokhrel', Address:'Illam',phoneNo:'987654321',gender:'Male'},
        {Name:'Kiara Thapa', Address:'Pokhara',phoneNo:'987654321',gender:'Female'},
        {Name:'Kiran Shrestha', Address:'Kathmandu',phoneNo:'987654321',gender:'Female'},
        {Name:'Nabina Bhattarai', Address:'Mustang',phoneNo:'987654321',gender:'Female'},
        {Name:'Nabin Pokhrel', Address:'Illam',phoneNo:'987654321',gender:'Male'},
        {Name:'Kiara Thapa', Address:'Pokhara',phoneNo:'987654321',gender:'Female'},
        {Name:'Nabina Bhattarai', Address:'Mustang',phoneNo:'987654321',gender:'Female'},
        {Name:'Nabin Pokhrel', Address:'Illam',phoneNo:'987654321',gender:'Male'},
        {Name:'Kiara Thapa', Address:'Pokhara',phoneNo:'987654321',gender:'Female'},
        {Name:'Kiara Thapa', Address:'Pokhara',phoneNo:'987654321',gender:'Female'},
        {Name:'Nabina Bhattarai', Address:'Mustang',phoneNo:'987654321',gender:'Female'},
        {Name:'Nabin Pokhrel', Address:'Illam',phoneNo:'987654321',gender:'Male'},
        {Name:'Kiara Thapa', Address:'Pokhara',phoneNo:'987654321',gender:'Female'},
    ]
  return (
    <div className='home_fullcontainer'>
        <div className="home_header">
            <div className='title_home'>
                <p>Home</p>
            </div>
            <div className='search_home_container'>
                <input type="text" />
                 <button></button>
            </div>
            <div className='notification_home_container'>
               

                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>


         <div className='contents_home_container'>

        <div className='table_container'>
            <table>
                <th>Name</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Gender</th>
            
                {
                collection.map((item)=>{
                    return(
                        <>
                        <tr/>
                        <td>{item.Name}</td>
                        <td>{item.Address}</td>
                        <td>{item.phoneNo}</td>
                        <td>{item.gender}</td>
                        </>
                    )
                })
}
            </table>
            
        </div>

        <div  className='home_detail_container'>
             <div className='achements_container'>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>

                </div>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
        </div>
      
    </div>
  )
}

export default Home
