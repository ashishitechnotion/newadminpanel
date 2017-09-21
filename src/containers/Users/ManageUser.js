import React,{Component} from 'react';
import { render } from 'react-dom';
import DefaultButton from '../../component/Button/Index';
class ManageUser extends Component 
{
    constructor(props) 
    {
    super(props);
    this.state = {btnText:"View",
        data: 
        [
            {
                "id": 1,
                "user_name": "Bill gate",
                "email": "bilgate12@yahoo.com",
                "mobile":"9876543210"
              
            },
            {
                "id": 2,
                "user_name": "Bill gate",
                "email": "bilgate12@yahoo.com",
                "mobile":"9876543210"
            },
            {
                "id": 3,
                "user_name": "Bill gate",
                "email": "bilgate12@yahoo.com",
                "mobile":"9876543210"
              
            },
            {
                "id": 4,
                "user_name": "Bill gate",
                "email": "bilgate12@yahoo.com",
                "mobile":"9876543210"
              
            },
            {
                "id": 5,
                "user_name": "Bill gate",
                "email": "bilgate12@yahoo.com",
                "mobile":"9876543210"
              
            },
            {
                "id": 6,
                "user_name": "Bill gate",
                "email": "bilgate12@yahoo.com",
                "mobile":"9876543210"
              
            },
            {
                "id": 7,
                "user_name": "Bill gate",
                "email": "bilgate12@yahoo.com",
                "mobile":"9876543210"
              
            },
        ]
    }
}

    render() {
        const userList = this.state.data.map((item, i) => {
            return <tr key={i} >
         <td className="text-center">{item.id}</td>
         <td className="text-center">{item.user_name}</td>
         <td className="text-center">{item.email}</td>
         <td className="text-center">{item.mobile}</td>
         <td className="text-center">
         <DefaultButton btnText={this.state.btnText}>  </DefaultButton>
          </td>
            </tr>
            });
       return (
       <div className="row">
       <div className="col-sm-12">
           <section className="panel">
               <header className="panel-heading panel-border">
               Manage User
                   <span className="tools pull-right">
                       
                       <a className="refresh-box fa fa-repeat" href="javascript:void(0)"></a>
                       
                   </span>
               </header>
               <div className="panel-body table-responsive">
                   <table id="datatable" className="table colvis-data-table table-striped tbl-top">
                       
                       <thead>
                           <tr>
                               <th className="text-center">User ID</th>
                               <th className="text-center"> User Name </th>
                               <th className="text-center"> Email </th> 
                               <th className="text-center"> Mobile </th> 
                               <th className="text-center"> View </th> 
                           </tr>
                       </thead>
                       <tbody>
                       {userList}
                       </tbody>
                   </table>
               </div>
           </section>
       </div>
   </div>
 )
    }
}	
export default ManageUser;