import React,{Component} from 'react';
import { render } from 'react-dom';
import AHref from '../../component/AHref/Index';
class ViewAudit extends Component 
{
    constructor(props) 
    {
    super(props);
    this.state = {
        data: 
        [
            {
                "id": 1,
                "state_id": 1,
                "facility_id": 1,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-15T16:47:19.000Z",
                "audit_end_datetime": "2017-09-15T16:49:23.000Z",
                "audit_score": 95,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              },
              {
                "id": 5,
                "state_id": 6,
                "facility_id": 9,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-18T10:54:27.000Z",
                "audit_end_datetime": "2017-09-18T10:55:48.000Z",
                "audit_score": 92,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              },
              {
                "id": 6,
                "state_id": 3,
                "facility_id": 10,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-18T11:07:01.000Z",
                "audit_end_datetime": "2017-09-18T11:08:45.000Z",
                "audit_score": 96,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              },
              {
                "id": 7,
                "state_id": 1,
                "facility_id": 1,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-18T11:19:37.000Z",
                "audit_end_datetime": "2017-09-18T11:21:09.000Z",
                "audit_score": 96,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              },
              {
                "id": 8,
                "state_id": 1,
                "facility_id": 3,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-18T11:29:08.000Z",
                "audit_end_datetime": "2017-09-18T11:31:00.000Z",
                "audit_score": 96,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              },
              {
                "id": 9,
                "state_id": 6,
                "facility_id": 9,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-18T11:33:18.000Z",
                "audit_end_datetime": "2017-09-18T11:34:32.000Z",
                "audit_score": 89,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              },
              {
                "id": 10,
                "state_id": 6,
                "facility_id": 9,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-18T12:02:12.000Z",
                "audit_end_datetime": "2017-09-18T12:03:19.000Z",
                "audit_score": 96,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              },
              {
                "id": 11,
                "state_id": 1,
                "facility_id": 1,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-18T12:05:30.000Z",
                "audit_end_datetime": "2017-09-18T12:06:41.000Z",
                "audit_score": 89,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              },
              {
                "id": 12,
                "state_id": 1,
                "facility_id": 1,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-18T12:17:02.000Z",
                "audit_end_datetime": "2017-09-18T12:18:51.000Z",
                "audit_score": 85,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              },
              {
                "id": 13,
                "state_id": 1,
                "facility_id": 7,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-18T12:30:31.000Z",
                "audit_end_datetime": "2017-09-18T12:31:35.000Z",
                "audit_score": 92,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              },
              {
                "id": 14,
                "state_id": 6,
                "facility_id": 9,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-19T17:21:52.000Z",
                "audit_end_datetime": "2017-09-19T17:23:23.000Z",
                "audit_score": 92,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"

              },
              {
                "id": 17,
                "state_id": 6,
                "facility_id": 9,
                "audit_by": 8,
                "audit_start_datetime": "2017-09-19T18:02:56.000Z",
                "audit_end_datetime": "2017-09-19T18:03:44.000Z",
                "audit_score": 96,
                "audit_status": 1,
                "rectificaiton_by": null,
                "rectification_start_time": null,
                "rectification_end_time": null,
                "full_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_report.pdf",
                "graph_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_summary_graph.pdf",
                "rectification_report_link":"https://s3.amazonaws.com/majestic-dev/MountainViewAgedCarePlusCentre_September2017_audit_rectification_report.pdf"
              }
        ]};
    }
    render() {
        const auditList = this.state.data.map((item, i) => {
            return <tr key={i} >
         <td className="text-center">{item.id}</td>
         <td className="text-center">{item.audit_start_datetime}</td>
         <td className="text-center">{item.audit_end_datetime}</td>

         <td className="text-center">{item.audit_score}</td>
         <td className="text-center">
           <AHref linkUrl={item.full_report_link}></AHref>
           </td>
         <td className="text-center"> <AHref linkUrl={item.graph_report_link}></AHref></td>
         <td className="text-center"> <AHref linkUrl={item.rectification_report_link}></AHref></td>
            </tr>
            });

       return (
       <div className="row">
       <div className="col-sm-12">
           <section className="panel">
               <header className="panel-heading panel-border">
                  View Audit
                   <span className="tools pull-right">
                <a className="refresh-box fa fa-repeat" href="javascript:void(0)"></a>
                   </span>
               </header>
               <div className="panel-body table-responsive">
                   <table id="datatable" className="table colvis-data-table table-striped tbl-top">
                       
                       <thead>
                           <tr>
                               <th className="text-center">Audit Id</th>
                               <th className="text-center">Audit Start Date </th>
                               <th className="text-center">Audit End Date </th> 
                               <th className="text-center">Audit Score</th> 
                               <th className="text-center">Full Report</th> 
                               <th className="text-center">Graph Report</th> 
                               <th className="text-center">Rectf. Report</th> 
                           </tr>
                       </thead>
                       <tbody>
                       {auditList}
                       </tbody>
                   </table>
               </div>
           </section>
       </div>
   </div>
 )
    }
}	
export default ViewAudit;