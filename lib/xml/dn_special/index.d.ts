type DnSpecialDocumentTopElem = XmlTopElem & { Doc: DnSpecialDocument } & 
  FileListBase &
  CustomElemsBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  facult_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type DnSpecialDocument = XmlDocument & { TopElem: DnSpecialDocumentTopElem; };