import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/teacherList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: [
          {
            id: 1,
            username: "刘老师",
            userNo: "523175",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886666",
            email: "liu6666@163.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 2,
            username: "李老师",
            userNo: "523176",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886667",
            email: "li6667@163.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 3,
            username: "王老师",
            userNo: "523177",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886668",
            email: "wang6668@163.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 4,
            username: "陈老师",
            userNo: "523178",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886669",
            email: "chen6669@163.com",
            status: 0,
            createTime: 1609837428000
          },
          {
            id: 5,
            username: "郑老师",
            userNo: "523179",
            gender: "男",
            college: "计算机学院",
            jobTitle: "副教授",
            phone: "17888886670",
            email: "zheng6670@163.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 6,
            username: "赵老师",
            userNo: "523180",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886671",
            email: "zhao6671@163.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 7,
            username: "孙老师",
            userNo: "523181",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886672",
            email: "sun6672@163.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 8,
            username: "刘老师",
            userNo: "523182",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886673",
            email: "liu6666@164.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 9,
            username: "李老师",
            userNo: "523183",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886674",
            email: "li6667@164.com",
            status: 0,
            createTime: 1609837428000
          },
          {
            id: 10,
            username: "王老师",
            userNo: "523184",
            gender: "女",
            college: "计算机学院",
            jobTitle: "副教授",
            phone: "17888886675",
            email: "wang6668@164.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 11,
            username: "陈老师",
            userNo: "523185",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886676",
            email: "chen6669@164.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 12,
            username: "郑老师",
            userNo: "523186",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886677",
            email: "zheng6670@164.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 13,
            username: "赵老师",
            userNo: "523187",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886678",
            email: "zhao6671@164.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 14,
            username: "孙老师",
            userNo: "523188",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886679",
            email: "sun6672@164.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 15,
            username: "刘老师",
            userNo: "523189",
            gender: "男",
            college: "计算机学院",
            jobTitle: "副教授",
            phone: "17888886680",
            email: "liu6666@165.com",
            status: 0,
            createTime: 1609837428000
          },
          {
            id: 16,
            username: "李老师",
            userNo: "523190",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886681",
            email: "li6667@165.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 17,
            username: "王老师",
            userNo: "523191",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886682",
            email: "wang6668@165.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 18,
            username: "陈老师",
            userNo: "523192",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886683",
            email: "chen6669@165.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 19,
            username: "郑老师",
            userNo: "523193",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886684",
            email: "zheng6670@165.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 20,
            username: "赵老师",
            userNo: "523194",
            gender: "男",
            college: "计算机学院",
            jobTitle: "副教授",
            phone: "17888886685",
            email: "zhao6671@165.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 21,
            username: "孙老师",
            userNo: "523195",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886686",
            email: "sun6672@165.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 22,
            username: "刘老师",
            userNo: "523196",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886687",
            email: "liu6666@166.com",
            status: 0,
            createTime: 1609837428000
          },
          {
            id: 23,
            username: "李老师",
            userNo: "523197",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886688",
            email: "li6667@166.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 24,
            username: "王老师",
            userNo: "523198",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886689",
            email: "wang6668@166.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 25,
            username: "陈老师",
            userNo: "523199",
            gender: "男",
            college: "计算机学院",
            jobTitle: "副教授",
            phone: "17888886690",
            email: "chen6669@166.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 26,
            username: "郑老师",
            userNo: "523200",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886691",
            email: "zheng6670@166.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 27,
            username: "赵老师",
            userNo: "523201",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886692",
            email: "zhao6671@166.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 28,
            username: "孙老师",
            userNo: "523202",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886693",
            email: "sun6672@166.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 29,
            username: "刘老师",
            userNo: "523203",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886694",
            email: "liu6666@167.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 30,
            username: "李老师",
            userNo: "523204",
            gender: "女",
            college: "计算机学院",
            jobTitle: "副教授",
            phone: "17888886695",
            email: "li6667@167.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 31,
            username: "王老师",
            userNo: "523205",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886696",
            email: "wang6668@167.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 32,
            username: "陈老师",
            userNo: "523206",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886697",
            email: "chen6669@167.com",
            status: 0,
            createTime: 1609837428000
          },
          {
            id: 33,
            username: "郑老师",
            userNo: "523207",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886698",
            email: "zheng6670@167.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 34,
            username: "赵老师",
            userNo: "523208",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886699",
            email: "zhao6671@167.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 35,
            username: "孙老师",
            userNo: "523209",
            gender: "男",
            college: "计算机学院",
            jobTitle: "副教授",
            phone: "17888886700",
            email: "sun6672@167.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 36,
            username: "刘老师",
            userNo: "523210",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886701",
            email: "liu6666@168.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 37,
            username: "李老师",
            userNo: "523211",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886702",
            email: "li6667@168.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 38,
            username: "王老师",
            userNo: "523212",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886703",
            email: "wang6668@168.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 39,
            username: "陈老师",
            userNo: "523213",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886704",
            email: "chen6669@168.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 40,
            username: "郑老师",
            userNo: "523214",
            gender: "女",
            college: "计算机学院",
            jobTitle: "副教授",
            phone: "17888886705",
            email: "zheng6670@168.com",
            status: 0,
            createTime: 1609837428000
          },
          {
            id: 41,
            username: "赵老师",
            userNo: "523215",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886706",
            email: "zhao6671@168.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 42,
            username: "孙老师",
            userNo: "523216",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886707",
            email: "sun6672@168.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 43,
            username: "刘老师",
            userNo: "523217",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886708",
            email: "liu6666@169.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 44,
            username: "李老师",
            userNo: "523218",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886709",
            email: "li6667@169.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 45,
            username: "王老师",
            userNo: "523219",
            gender: "男",
            college: "计算机学院",
            jobTitle: "副教授",
            phone: "17888886710",
            email: "wang6668@169.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 46,
            username: "陈老师",
            userNo: "523220",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886711",
            email: "chen6669@169.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 47,
            username: "郑老师",
            userNo: "523221",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886712",
            email: "zheng6670@169.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 48,
            username: "赵老师",
            userNo: "523222",
            gender: "女",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886713",
            email: "zhao6671@169.com",
            status: 0,
            createTime: 1609837428000
          },
          {
            id: 49,
            username: "孙老师",
            userNo: "523223",
            gender: "男",
            college: "计算机学院",
            jobTitle: "教授",
            phone: "17888886714",
            email: "sun6672@169.com",
            status: 1,
            createTime: 1609837428000
          },
          {
            id: 50,
            username: "刘老师",
            userNo: "523224",
            gender: "男",
            college: "计算机学院",
            jobTitle: "副教授",
            phone: "17888886715",
            email: "liu6666@170.com",
            status: 1,
            createTime: 1609837428000
          }
        ]
      };
    }
  },
  {
    url: "/studentList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: [
          {
            username: "admin",
            nickname: "admin",
            remark: "管理员",
            deptId: 103,
            postIds: [1],
            mobile: "15888888888",
            sex: 0,
            id: 1,
            status: 0,
            createTime: 1609837427000,
            dept: {
              id: 103,
              name: "研发部门"
            }
          },
          {
            username: "pure",
            nickname: "pure",
            remark: "不要吓我",
            deptId: 104,
            postIds: [1],
            mobile: "15888888888",
            sex: 0,
            id: 100,
            status: 1,
            createTime: 1609981637000,
            dept: {
              id: 104,
              name: "市场部门"
            }
          },
          {
            username: "小姐姐",
            nickname: "girl",
            remark: null,
            deptId: 106,
            postIds: null,
            mobile: "15888888888",
            sex: 1,
            id: 103,
            status: 1,
            createTime: 1610553035000,
            dept: {
              id: 106,
              name: "财务部门"
            }
          },
          {
            username: "小哥哥",
            nickname: "boy",
            remark: null,
            deptId: 107,
            postIds: [],
            mobile: "15888888888",
            sex: 0,
            id: 104,
            status: 0,
            createTime: 1611166433000,
            dept: {
              id: 107,
              name: "运维部门"
            }
          }
        ]
      };
    }
  },
  {
    url: "/classList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: [
          {
            id: 1,
            name: "计算机学院",
            type: 1,
            parentId: 0,
            sort: 1,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 11,
            name: "计算机科学与技术",
            type: 2,
            parentId: 1,
            sort: 11,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 101,
            name: "19052301",
            type: 3,
            parentId: 11,
            sort: 101,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 102,
            name: "19052302",
            type: 3,
            parentId: 11,
            sort: 102,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 103,
            name: "19052303",
            type: 3,
            parentId: 11,
            sort: 103,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 104,
            name: "19052304",
            type: 3,
            parentId: 11,
            sort: 104,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 105,
            name: "19052305",
            type: 3,
            parentId: 11,
            sort: 105,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 106,
            name: "19052306",
            type: 3,
            parentId: 11,
            sort: 106,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 107,
            name: "19052307",
            type: 3,
            parentId: 11,
            sort: 107,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 108,
            name: "19052308",
            type: 3,
            parentId: 11,
            sort: 108,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 109,
            name: "19052309",
            type: 3,
            parentId: 11,
            sort: 109,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 110,
            name: "19052310",
            type: 3,
            parentId: 11,
            sort: 110,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 111,
            name: "19052311",
            type: 3,
            parentId: 11,
            sort: 111,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 112,
            name: "19052312",
            type: 3,
            parentId: 11,
            sort: 112,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 113,
            name: "19052313",
            type: 3,
            parentId: 11,
            sort: 113,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 114,
            name: "19052314",
            type: 3,
            parentId: 11,
            sort: 114,
            status: 0,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 115,
            name: "19052315",
            type: 3,
            parentId: 11,
            sort: 115,
            status: 0,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 12,
            name: "软件工程",
            type: 2,
            parentId: 1,
            sort: 12,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 201,
            name: "19052711",
            type: 3,
            parentId: 12,
            sort: 201,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 202,
            name: "19052712",
            type: 3,
            parentId: 12,
            sort: 202,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 203,
            name: "19052713",
            type: 3,
            parentId: 12,
            sort: 203,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 204,
            name: "19052714",
            type: 3,
            parentId: 12,
            sort: 204,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 205,
            name: "19052715",
            type: 3,
            parentId: 12,
            sort: 205,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 206,
            name: "19052716",
            type: 3,
            parentId: 12,
            sort: 206,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 207,
            name: "19052717",
            type: 3,
            parentId: 12,
            sort: 207,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 208,
            name: "19052718",
            type: 3,
            parentId: 12,
            sort: 208,
            status: 1,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 209,
            name: "19052719",
            type: 3,
            parentId: 12,
            sort: 209,
            status: 0,
            createTime: 1609840000000,
            desc: "无"
          },
          {
            id: 210,
            name: "19052720",
            type: 3,
            parentId: 12,
            sort: 210,
            status: 0,
            createTime: 1609840000000,
            desc: "无"
          }
        ]
      };
    }
  }
] as MockMethod[];
