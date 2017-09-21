import React,{Component} from 'react';
import { render } from 'react-dom';
import AHref from '../../component/AHref/Index.js';
class ManageQuestion extends Component 
{
    constructor(props) 
    {
    super(props);
    this.state = {
        data: 
        [
            {
                "id": 1,
                "question_text": "Does the facility have a system in place to label resident clothing appropriately ?",
                "state_id": 1,
                "question_info": null
              },
              {
                "id": 2,
                "question_text": "Is resident clothing labelled discretely ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 3,
                "question_text": "Is the communication and information provided to new resident regarding how the facility assists them with laundry services accurate (Refer to the Resident Handbook)?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 4,
                "question_text": "Are the schedules and signage documents current and maintained by staff?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 5,
                "question_text": "Are approciate infection control practices followed in the laundry i.e. use of all colour codes, appropriate linen skips- separating clean area from soiled area etc. ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 6,
                "question_text": "Are there adequate supplies of PPE equipment available in the laundry for staff to use i.e. gloves, goggles, aprons ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 7,
                "question_text": "Are there MSDS sheets available for all chemicals that are in the laundry ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 8,
                "question_text": "Is there documented evidence that laundry staff are following the laundry cleaning schedule ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 9,
                "question_text": "Does the facility have a resident laundry, If so- is this area checked, If the dryer cleaned- lint is removed",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 10,
                "question_text": "Does the facility have a system in place to prevent resident clothing from going missing ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 11,
                "question_text": "Does the facility have a system in place to distribute resident clothing in accordance with resident preferences and needs.",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 12,
                "question_text": "Is there evidence that resident choice regarding their laundering preferences is respected ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 13,
                "question_text": "Is information/documentation in the laundry current i.e. most current policy, cleaning schedule, memos etc. ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 14,
                "question_text": "Is there a system to monitor resident satisfaction with the laundry service ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 15,
                "question_text": "Is there evidence that issues with resident satisfaction related to the laundry are followed up i.e. comment, complaint and compliment forms, satisfaction surveys, meeting minutes etc.",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 16,
                "question_text": "Are there adequate supplies of linen around the facility i.e. towels, bed sheets etc.",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 17,
                "question_text": "Is the quality of the linen maintained – i.e. there is no torn linen in use",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 18,
                "question_text": "Do laundry staff participate in appropriate education ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 19,
                "question_text": "Is the laundry services policy and procedure current ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 20,
                "question_text": "Are ironing facilities available in the laundry ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 21,
                "question_text": "Are linen skips labelled corrently with the correct description for the colour code ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 22,
                "question_text": "Is electrical equipment in the laundry checked, tested and tagged ?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 23,
                "question_text": "Are the laundry tubs cleaned and free of debris?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 24,
                "question_text": "Are the lint filters of the dryers cleaned regularly (inspect linen filters)?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 25,
                "question_text": "Is the laundry clean at the time of the audit?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 26,
                "question_text": "Are staff observed to be practicing appropriate infection control practices i.e. linen bags not stored on the floor, apron is worn in the dirty area?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 27,
                "question_text": "Is there a clear distinction between the dirty and clean area of the laundry?",
                "state_id": 1,
                "question_info": ""
              },
              {
                "id": 28,
                "question_text": "Can staff explain what action to take in case of an outbreak?",
                "state_id": 1,
                "question_info": ""
              }
        ]
     }
    };

    render() {

        const questionList = this.state.data.map((item, i) => {
            return <tr key={i} >
         <td className="text-center">{item.id}</td>
         <td >{item.question_text}</td>
         <td className="text-center">
         <AHref></AHref>
         </td>
         
            </tr>
            });

       return (
     
       <div className="row">
       <div className="col-sm-12">
           <section className="panel">
               <header className="panel-heading panel-border">
                  Manage Question
                   <span className="tools pull-right">
                       <a className="refresh-box fa fa-repeat" href="javascript:void(0)"></a>
                   </span>
               </header>
               <div className="panel-body table-responsive">
                   <table id="datatable" className="table colvis-data-table table-striped tbl-top">
                       <thead>
                           <tr>
                               <th className="text-center">Id</th>
                               <th >Question Text</th>
                               <th className="text-center">View</th>
                           </tr>
                       </thead>
                       <tbody>
                       {questionList}
                       </tbody>
                   </table>
               </div>
           </section>
       </div>
   </div>
  
 )
    }
}	
export default ManageQuestion;