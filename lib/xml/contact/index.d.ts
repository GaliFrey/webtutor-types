interface ContactDocumentPollResult {
  poll_result_id?: XmlElem<number>;
}

type ContactDocumentTopElem = XmlTopElem & { Doc: ContactDocument } & 
  FileListBase &
  AdminAccessBase &
  CustomElemsBase &
  CustomDatasBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  project_id?: XmlElem<number>;
  type_id?: XmlElem<number>;
  initiator_person_fullname?(): unknown;
  contact_person_fullname?(): unknown;
  initiator_person_id?: XmlElem<number>;
  contact_person_id?: XmlElem<number>;
  contact_org_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  contact_date?: XmlElem<Date>;
  previous_contact_id?: XmlElem<number>;
  result_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  poll_results?: XmlMultiElem<ContactDocumentPollResult>;
  desc?: XmlElem<string>;
}

type ContactDocument = XmlDocument & { TopElem: ContactDocumentTopElem; };