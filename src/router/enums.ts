// 将 rank 抽离出来，在此方便维护
// 规定只有 home 路由的 rank 才能为 0

const home = 0,
  systemManagement = 1,
  thesisManagement = 2,
  dataStatistics = 3,
  supervisedStudents = 4,
  evaluationManagement = 5,
  thesisTopicSelection = 6,
  supervisedTeacher = 7,
  submitThesis = 8,
  user = 9,
  schoolWebsite = 10,
  guide = 11,
  about = 12,
  error = 13;

export {
  home,
  systemManagement,
  thesisManagement,
  dataStatistics,
  supervisedStudents,
  evaluationManagement,
  thesisTopicSelection,
  supervisedTeacher,
  submitThesis,
  user,
  schoolWebsite,
  guide,
  about,
  error
};
