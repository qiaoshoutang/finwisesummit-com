(function(win) {
  var opts = {
    element: document,
    lang: (function() {
      var tyLang = localStorage.tyLang;
      if (tyLang && tyLang.length > 0 && tyLang != "undefined") {
        return tyLang;
      }
      return "zh";
    })(), //en | jap,
    i18n: {
      //key编码规则：取前2个中文字符拼音+最后2个中文字符拼音
      //不满4个中文字符用e代表
      zh: {
        seey1: "首页",
        hyyc2: "会议议程",
        zzhz3: "赞助合作",
        wjhg4: "往届回顾",
        gywm5: "关于我们",
        hqmp6: "获取门票",
        qyyj7: "企业参展或演讲",
        wncp8: "为您提供理想平台树立品牌认知度、达成联合主办关系和发布新产品",
        qybm9: "企业报名",
        grbm10: "个人购票报名",
        // xsly11: "限时早鸟票1588元4月21日恢复2800元",
        xsly11: " 点击个人报名，购买峰会门票",
        grbm12: "个人报名",
        chjb13: "参会嘉宾",
        tzjg14: "投资机构",
        mtbd15: "媒体参与报道",
        qqgs16: "全球区块链公司",
        gydh17: "关于大会",
        fstj18:
          "Finwise Summit 纷智区块链峰会，旨在加强全球金融行业从业者们的交流，推动全球金融科技的发展，我们将以目前金融科技领域最前沿的区块链技术为主导，集合全球优秀企业内企业，对未来科技金融及区块链技术应用发展，进行展望和推进。",
        ckgd19: "查看更多",
        lhzb20: "联合主办",
        mtxb21: "媒体协办",
        xbfe22: "协办方",
        pwzx23: "票务咨询",
        zzzx24: "赞助咨询",
        gywm25: "关注我们",

        fzyc26: "纷智区块链峰会 东京站大会议程",
        hdbg28: "获得品牌曝光",
        tghb29:
          "通过现场展览，让您的品牌形象遍布于各媒体网站及大会会场，有助于您提升品牌认知度。 Finwise Summit Tokyo ，预计将覆盖 2500+参会嘉宾、东亚 800万+ 区块链相关人士。此次峰会除了纷智官方的Facebook、twitter 等社交渠道，将在会前、会中、会后全方位传播大会及合作伙伴信息外，相关的区块链行业的企业媒体、个人自媒体，也将全渠道、多维度同步曝光合作伙伴。",
        tzyh30: "拓展潜在用户",

        tgjl31:
          "通过展示您的优秀产品及服务，吸引用户使用，有助您提升品牌关注度。Finwise Summit Tokyo将重点关注、探讨行业的监管、各国对区块链的政策、日本交易所的合规性等热点问题，吸引更多区块链行业最热门、最具代表的行业企业资源到场参与，促进合作交流。",
        scsl32: "输出技术实力",
        tgcx33:
          "通过演讲分享您的项目进展，输出企业/团队技术实力，有利于您提升品牌认可度。Finwise Summit Tokyo特设区块链项目方讲解专场、定制品牌分论坛，期待您推荐优秀讲师分享行业见解、解读项目优势、传播区块链行业技术和创新。",
        bzzs34: "标准展位招商",
        lhzb35: "联合主办",
        zsxb36: "钻石级协办",
        jpzz37: "金牌赞助",
        ypzz38: "银牌赞助",
        tpzz39: "铜牌赞助",
        gwms40: "官网显示企业Logo及企业描述",
        fhpp41: "峰会展商手册 展示企业品牌",
        fhbf42: "峰会暖场期间企业视频的播放",
        fhgm43: "分会场冠名",
        mtzf44: "媒体专访",
        esyj45: "20分钟独立演讲",
        bzzt46: "标准展台",
        wixz47: "VIP通行证",
        jeeg48: "价格",

        dcqd50: "到场嘉宾签到",
        dhks51: "大会开始",
        hyzz52: "大会揭幕致辞",
        bcys53: "BCUA揭幕仪式",
        jgfz54: "监管技术如何推动数字货币行业的发展",
        kxzx55: "跨辖区和金融服务的区块链互操作性",
        jgzy56: "监管机构及其在制定支持性立法和治理方面的作用",
        qkcx49: "区块链如何促进社会生产力的创新",
        rhyy57: "如何实现区块链的广泛应用",
        fxkl58: "风险投资与区块链",
        jmld59: "加密货币价格与股票市场的关联度",
        qkbg60: "区块链技术对未来金融的变革",
        jyhg61: "交易所如何做到自律与合规",
        qkxz62: "区块链应用的技术限制",
        gsyh63: "共识机制的演化",
        qkwl64: "区块链的过去、现在和未来",
        jywl65: "交易所的未来",
        gyjc66: "共赢机制是未来公司的基础",
        qktd67: "区块链的安全问题与痛点",
        qkzn68: "区块链与人工智能",
        qkfz69: "区块链在移动端的全新发展",
        xyqs70: "新一代矿池的发展趋势",

        fhfz71:
          "FINWISE峰会是中国最具影响的区块链峰会之一，团队由经验丰富的金融市场专家和区块链行业精英组成，核心成员均来自知名银行、区块链、咨询、金融、互联网公司，汇集时代最强大脑，集合优秀企业，旨在加强行业从业者们的交流，推动全球金融科技的发展",
        cewl72:
          "从2017起，FINWISE先后在上海和澳门两地举办，共吸引近万人现场参与，数百万人在线参与，近百家国内外媒体报道。2018年FINWISE将在东京、迪拜、香港等地陆续举办，我们邀请一起见证更美好的未来。",
        zwhe73: "FINWISE组委会",
        hxcy74: "核心团队成员",

        cyqy75: "参与合作，赞助商将获得以下权益",

        lysn76: "刘彦燊",
        lysd77:
          "Colony Capital柯罗尼资本亚太区董事总经理 WE+创始人兼首席执行官CEO",

        nameyd01:"杨东",
        positionyd01:"中国人民大学法学院教授、博导、副院长",
          namewbs02:"王彬生",
          positionwbs02:"区块链联合发展组织顾问、中国社会科学院研究生院特聘教授",
          namezyh03:"张银海",
          positionzyh03:"Lighting BTC中国区负责人",
          namelf04:"刘飞",
        positionlf04:"火币Pro运营总监",
          namelj05:"刘劲",
          positionlj05:"日中AI·IoT产业联盟会长",
          namesf06:"宋斐",
        positionsf06:"海朴际诚基金执行合伙人",


          namerjh07:"任锦澔",
        positionrjh07:"国泰君安上海财富中心副总经理",

          namelzh08:"卢志怀",
          positionlzh08:"联合资信评级上海公司副总经理",

          namefj09:"冯晋",
          positionfj09:"高榕资本",

          namewyh10:"王岳华",
          positionwyh10:"德丰杰龙脉创新基金 合伙人",

          nameghc11:"郭宏才",
          positionghc11:"比特币天使投资人",

          namezll12:"张了了",
          positionzll12:"gate.io合伙人",

          nameylc13:"杨林科",
          positionylc13:"比特币中国联合创始人、比特币钻石中国区顾问",

          namelbj14:"刘炳江",
          positionlbj14:"Digital Asset Co., Ltd 社长",

          namelsf15:"李书沸",
          positionlsf15:"OKEx CEO",

          namety16:"佟扬",
          positionty16:"金色财经合伙人",


          namericoni17:"Riconi You",
          positionriconi17:"纷智联合创始人兼执委会主席",



          namehjp18:"胡杰鹏",
          positionhjp18:"量子金亚洲市场负责人",

          namelqw19:"林琪武",
          positionlqw19:"知产链IPChain联合创始人",

          namech20:"陈浩",
          positionch20:"维优 首席技术官",

          namelmz21:"李明肇",
          positionlmz21:"小牛链 CEO",


          nametedlin22:"Ted Lin",
          positiontedlin22:"币安国际市场负责人",

          namedxx23:"段新星",
          positiondxx23:"比原链 创始人",

          nameyzy24:"叶祖研",
          positionyzy24:"链向财经联合创始人&CEO",

          nameethanyu25:"Ethan Yu",
          positionethanyu25:"BABI财经 运营总监",

          namelyl26:"李一灵",
          positionlyl26:"Trinity创始人",

          namejyj27:"蒋宇捷",
          positionjyj27:"信天创投合伙人",

          namesj28:"孙健",
          positionsj28:"九鼎数字资产实验室（J Lab）合伙人",

          nameyxh29:"余晓菡",
          positionyxh29:"DataKYC时链创始人",


          namekr30:"Kilian Rausch",
          positionkr30:"Exchange Union Product Director",

          namekjx31:"區鍵禧",
          positionkjx31:"LUXCHAIN联合创始人 | 区块链及人工智能领域专栏作家",

          namett32:"Talal Tabbaa",
          positiontt32:"Co-Founder Jibrel Network",

          namecyq33:"蔡逸群",
          positioncyq33:"名资金融科技、名资创投、名资股份有限公司创始人、董事长兼首席资本家、元界基金会首席资本家",


          namesxh34:"石晓虹",
          positionsxh34:"UniGame CEO",

          namenr35:"Nenad Rakocevic",
          positionnr35:"Co-Founder of Red",

          namelrj36:"李仁杰",
          positionlrj36:"富士康HCM资本执行合伙人",

          namestg37:"尚币哥",
          positionstg37:"BTC123 董事长",


          nameemil38:"Emil",
          positionemil38:"Penta社区负责人",

          namelxy39:"李翔宇",
          positionlxy39:"NEM中国联合创始人兼COO",

          nameldw40:"李大伟",
          positionldw40:"ZB.COM中币创始人",

          namemark41:"Mark",
          positionmark41:"BlockchainCasnio创始人",

          namedcz42:"董长治",
          positiondcz42:"Basic World 联合创始人",

          namewlj43:"王利杰",
          positionwlj43:"BeeChat Fund 董事",

          namekw44:"Kenzi Wang",
          positionkw44:"Superbloom联合创始人",

          namehyq45:"胡园泉",
          positionhyq45:"BEPAL首席执行官、黑盾区块链安全研究中心联合创始人",


          namezh46:"曾豪",
          positionzh46:"蚂蚁区块链联盟创始人 福建区块链俱乐部发起人",

          namesjl47:"邵建良",
          positionsjl47:"比升资本创始人 浙江省投融资协会常务副秘书长",

          namecf48:"曹锋",
          positioncf48:"PCHAIN发起人、中物联区块链协会首席科学家、区块链联盟ChinaLedger共同发起人",

          namexyq49:"肖永泉",
          positionxyq49:"MeshBox创始人、CEO",

          nameszy50:"孙泽宇",
          positionszy50:"库神联合创始人、库神品牌总监",

          namepl51:"Paul Liu",
          positionpl51:"敏捷区块链基金会（FAB）主席，首席区块链专家",

          namepzx52:"彭宗欣",
          positionpzx52:"国际区块链研究会&量子金创始人",

          namely53:"粱羽",
          positionly53:"星链StarChain投资人、開拍網創始人&CEO",

          namehm54:"Hassan Miah",
          positionhm54:"CTO and Co-Founder of Robin8",

          namesmw55:"孙明伟",
          positionsmw55:"块讯 创始人",

          namellw56:"凌连伟",
          positionllw56:"GCS游戏链创始人",

          namefwk57:"符文科",
          positionfwk57:"Enjoy chain CEO",

          namelp58:"刘平",
          positionlp58:"Seer数字竞猜负责人",

          namerp59:"Roger Pottier",
          positionrp59:"ATN 产品经理",

          namelyc60:"雷迎春",
          positionlyc60:"九个亿财经CEO",

          namegf61:"高飞",
          positiongf61:"AFC亞太區運營總監",

          nametarmar62:"Tarmar Menteshashvili",
          positiontarmar62:"Expread Co-founder",

          namewbh63:"吴兵华",
          positionwbh63:"UGCHAIN 创始人",

          nameck64:"Cyrus Khajvandi",
          positionck64:"NSF&HHMI Researcher, Stanford Univerisity, Co-founder & CEO of BitBounce.io",

          namehqt65:"何清涛Justin He",
          positionhqt65:"HLWCHAIN社区负责人兼CEO",

          nameybz66:"YangBing Zhan",
          positionybz66:"CEO, CoinBene",

          nametoni67:"Toni",
          positiontoni67:"九个亿财经CEO",

          nameljl68:"刘嘉陵",
          positionljl68:"比特股理事会理事、比特创业营创始成员、 YOYOW 联合创始人",

          namegyl69:"高泽龙",
          positiongyl69:"国际区块链与数字货币协会 副会长",
      },


      en: {
        seey1: "Home",
        hyyc2: "Agenda",
        zzhz3: "Sponsorship",
        wjhg4: "Flashbacks",
        gywm5: "About US",
        hqmp6: "Tickets and Registration",
        qyyj7: "Exhibitors or Speakers",
        wncp8:
          "Provide you with an ideal platform to build brand awareness, form partnerships and launch new products.",
        qybm9: "Exhibitor Registration",
        grbm10: "Individual Tickets",
        xsly11: "Click the registrants,buy tickets for summit",
        // xsly11: "Early Bird Registration 1588 ¥，2880  ¥ (Up to April 21)",
        grbm12: "Individual Registration",
        chjb13: "Participants",
        tzjg14: "Investmet Institutions",
        mtbd15: "Media and Reports",
        qqgs16: "Global Blockchain Corporation",
        gydh17: "About Finwise",
        fstj18:
          "Finwise Summit aims to strengthen networks among practitioners in the global financial industry and promote the development of global financial technology.  With a focus on cutting-edge blockchain technology, Finwise assembles outstanding fintech and blockchain companies to share and debate the application and development of fintech and blockchain technology.",
        ckgd19: "View More",
        lhzb20: "Co-sponsor",
        mtxb21: "Media Association",
        xbfe22: "Co-organizer",
        pwzx23: "Tickets Consulting",
        zzzx24: "Sponsorship Consulting",
        gywm25: "Follow Us",

        fzyc26: "Agenda for FINWISE Blockchain Summit Tokyo 2018",
        hdbg28: "Get Brand Exposure",
        tghb29:
          "Through on-site exhibitions, your brand image will be spread across media sites and conference venues, helping you to increase brand awareness. Finwise Summit Tokyo is expected to be attended by more than 2000 participants and over 8 million blockchain related practitioners in East Asia. The information of the Summit itself, sponsors and partners will be disseminated by Finwise official Facebook, Twitter, etc., before, during and after the conference. Immediate and tracking reports by kinds of news media in multiple dimensions will also be available including blockchain relevant industry’s corporate media and individual media.",
        tzyh30: "Expand Potential Users",
        tgjl31:
          "Users could be attracted by your outstanding products and services; thus, your brand awareness could be strengthened. With a focus on discussions on industry regulation, national policies on blockchain as well as compliance of Japanese exchanges, Finwise Summit Tokyo will attract the most authoritative  and representative industry resources for promoting cooperation and exchanges.",
        scsl32: "Demonstrate Technical Strength",
        tgcx33:
          "Sharing your project progress through speeches and presentations and demonstrating your company/team technical strengths will help you increase your brand recognition. Finwise Summit Tokyo specializes in blockchain project seminars and custom brand forums. We look forward to recommending excellent lecturers to share industry insights, interpret project advantages, and disseminate blockchain industry technology and innovation.",
        bzzs34: "Standard Booth Investment",
        lhzb35: "Co-host",
        zsxb36: "Top Level Co-organizer",
        jpzz37: "Gold Sponsor",
        ypzz38: "Silver Sponsor",
        tpzz39: "Bronze Sponsor",
        gwms40: "Logo and corporate description shown on the official website",
        fhpp41: "Corporate brand displayed on the Summit Exhibitor Manual",
        fhbf42: "Warm-up video of the corporate played during the summit",
        fhgm43: "Title Sponsorship of Sub-venues",
        mtzf44: "Exclusive Interview",
        esyj45: "20 mins Independent Speech",
        bzzt46: "Standard Booth Investment",
        wixz47: "VIP Pass",
        jeeg48: "Price",

        dcqd50: "Sign-in",
        dhks51: "Commencement of the Summit ",
        hyzz52: "Opening Ceremony",
        bcys53: "BCUA Unveiling Ceremony",
        jgfz54:
          "How  Regulatory Technology Promotes the Development of the Digital Currency Industry",
        kxzx55:
          "Interoperating Bockchains across Jurisdictions and Financial Services",
        jgzy56:
          "Regulators and Their Role in Develivering Supportive Legislation and Governance",
        qkcx49: "How Blockchains Promotes Productivity Innovation",
        rhyy57: "How to Implement Wide Blockchain Applications",
        fxkl58: "Venture Capital and Blockchain",
        jmld59:
          "The Relationship between the Cryptocurrency Price and the Stock Market",
        qkbg60: "Blockchain Technology for Future Financial Reform",
        jyhg61: "How Exchanges Do Self-Regulation and Compliance",
        qkxz62: "Technical Lmitations of Blockchain Applications",
        gsyh63: "Consensus Mechanism Evolution",
        qkwl64: "The Past, Present and Future of Blockchain",
        jywl65: "The Future of  Exchanges",
        gyjc66: "Win-win Mechanism，the foundation of the Future Company",
        qktd67: "Security Issues and Pain Points of Blockchain",
        qkzn68: "Blockchain and Artificial Intelligence",
        qkfz69: "New Development of Blockchain on the Mobile Devices",
        xyqs70: "The Development Trend of a New Generation of the Minging Pool",

        fhfz71:
          "FINWISE Summit is one of the most influential blockchain event in China. FINWEX is comprised of a team with rich experience in a wide range of industries including banking, blockchain, internet technology, consulting, and ratingbringing together top talents, industry elites and excellent enterprises. FINWISE Summit aims to strengthen the communication among blockchain-related practitioners and promote the development of global financial technology.",
        cewl72:
          "FINWISE Summit has been held in Shanghai and Macau succesfully since 2017, involving 10,000 people attedning onsite and millions of people offsite, and it is reportedly by nearly 100 domstic and overseas medias. In 2018, FINWISE will be held in Tokyo, Dubai and Hong Kong. We invite you to witness a better future together.",
        zwhe73: "FINWISE Organizing Committee",
        hxcy74: "Core Team Members",

        cyqy75: "Sponsors will obtain the following rights and interests",

        lysn76: "Allen Lau",
        lysd77: "Managing Director of Coloney Capital, Founder and CEO of WE+",

          nameyd01:"Dong Yang",
          positionyd01:"Professor, Doctoral Tutuor and Vice-President of the Law School of Renmin University of China",
          namewbs02:"Binsheng Wang",
          positionwbs02:"Blockchain Joint Development Organization Advisor, Special-term Professor of the Graduate School, Chinese Academy of Social Sciences",
          namezyh03:"Jack Zhang",
          positionzyh03:"Head of Lightning BTC China",
          namelf04:"Fei Liu",
          positionlf04:"Operations Director of Huobipro",
          namelj05:"Jin liu",
          positionlj05:"President of Japan-China AI.IoT Association",
          namesf06:"Fei Song",
          positionsf06:"Managing Partner, HPJC Fund",


          namerjh07:"Nicolas Ren",
          positionrjh07:"Deputy General Manager of Guotai Junan Shanghai Wealth Management Center",

          namelzh08:"Terd lu",
          positionlzh08:"Deputy General Manager of Lianhe Credit Rating Shanghai ",

          namefj09:"ALEX FENG",
          positionfj09:" Banyan Capital",

          namewyh10:"Yuehua Wang",
          positionwyh10:"Partner of DFJ DragonFund",

          nameghc11:"Hongcai Guo",
          positionghc11:"BTC Angel Investor",

          namezll12:"Liaoliao Zhang",
          positionzll12:"Partner of gate.io",

          nameylc13:"linke Yang",
          positionylc13:"Consultant of BTC Diamond",

          namelbj14:"Bingjiang Liu",
          positionlbj14:"President of Digital Asset Co., Ltd",

          namelsf15:"Chris Lee",
          positionlsf15:"CEO of OKEx",

          namety16:"Angela Tong",
          positionty16:"Partner of Jinse Finance",


          namericoni17:"Riconi You",
          positionriconi17:"Co-founder and Chairman of FINWISE Committee",



          namehjp18:"Jiepeng Hu",
          positionhjp18:"Asian Market Head of QTG",

          namelqw19:"林琪武",
          positionlqw19:"知产链IPChain联合创始人",

          namech20:"Hao Chen",
          positionch20:"CTO of ViewFin",

          namelmz21:"李明肇",
          positionlmz21:"小牛链 CEO",


          nametedlin22:"Ted Lin",
          positiontedlin22:"Head of International Markets at Binance",

          namedxx23:"Xinxin Duan",
          positiondxx23:"Founder of BTM",

          nameyzy24:"Zuyan Ye",
          positionyzy24:"Co-founder&CEO of Chainfor",

          nameethanyu25:"Ethan Yu",
          positionethanyu25:"Operations Director of BABI Finance",

          namelyl26:"David Yiling Li ",
          positionlyl26:"Founder of Trinity",

          namejyj27:"蒋宇捷",
          positionjyj27:"信天创投合伙人",

          namesj28:"Jian Sun",
          positionsj28:"Partner of J Lab",

          nameyxh29:"Xiaohan Xu",
          positionyxh29:"Co-founder of DataKYC",


          namekr30:"Kilian Rausch",
          positionkr30:"Product Director of Exchange Union",

          namekjx31:"Qulian Xi",
          positionkjx31:"Co-Founder of LUXCHAIN, Blockchain and AI Columnist",

          namett32:"Talal Tabbaa",
          positiontt32:"Co-Founder Jibrel Network",

          namecyq33:"Yiqun Cai",
          positioncyq33:"Founder, Chairman and Chief Capitalist of MAS Capital,Chief Capitalist of Metaverse Funddation",


          namesxh34:"Sean Shek",
          positionsxh34:"CEO of UniGame",

          namenr35:"Nenad Rakocevic",
          positionnr35:"Co-Founder of Red",

          namelrj36:"Jack Lee",
          positionlrj36:"Managing Partner of HCM Capital of Foxconn Technology Group",

          namestg37:"Xiaopeng Shang",
          positionstg37:"President of BTC123",


          nameemil38:"Emil",
          positionemil38:"Penta Community Leader",

          namelxy39:"Xiangyu LI",
          positionlxy39:"Co-Founder & COO of NEM China",

          nameldw40:"Dawei Li",
          positionldw40:"Founder of ZB.COM",

          namemark41:"Mark",
          positionmark41:"Founder of BlockchainCasnio ",

          namedcz42:"Changzhi Dong",
          positiondcz42:"Co-Founder of Basic World",

          namewlj43:"leo wang",
          positionwlj43:"Director of BeeChat Fund",

          namekw44:"Kenzi Wang",
          positionkw44:"Co-Founder of Superbloom",

          namehyq45:"Yuanquan Hu",
          positionhyq45:"CEO of BEPAL, Co-Founder of Heydun Chain Security Research Center",


          namezh46:"Hao Zen",
          positionzh46:"Founder of ANT Blockchain Alliance, Organizer of the Fujian Blockchain Club",

          namesjl47:"Jianliang Shao",
          positionsjl47:"Founder of Bitrise Capital, Deputy Secretary-General of the Investment and Finance Association of Zhejiang Province",

          namecf48:"Feng Cao",
          positioncf48:"Founder of PCHAIN, Chief Scientist of Blockchain Committee in China Federation of Logistics and Purchasing, Co-Founder of ChinaLedger of Blockchain Alliance",

          namexyq49:"Yongquan Xiao",
          positionxyq49:"Founder and CEO of MeshBox",

          nameszy50:"Zeyu Sun",
          positionszy50:"Co-Founder and Brand Director of Coldlar",

          namepl51:"Paul Liu",
          positionpl51:"FAB Chairman Chief Blockchain Specialist",

          namepzx52:"Zongxin Peng",
          positionpzx52:"Founder of International Blockchain Research Association and QTG",

          namely53:"Yu liang",
          positionly53:"StarChain Investor, Founder and CEO of Kaipai",

          namehm54:"Hassan Miah",
          positionhm54:"CTO and Co-Founder of Robin8",

          namesmw55:"Mingwei Sun",
          positionsmw55:"Founder of Blocknews",

          namellw56:"Lianwei Sun",
          positionllw56:"CEO of Gamechain System GCS",

          namefwk57:"Kevin Fu ",
          positionfwk57:"CEO of Enjoy Chain",

          namelp58:"Pin Liu",
          positionlp58:"Head of Seer.pro",

          namerp59:"Roger Pottier",
          positionrp59:"ATN 产品经理",

          namelyc60:"Yingchun Lei",
          positionlyc60:"CEO of JGY Finance",

          namegf61:"Fai Gao",
          positiongf61:"Asia Pacific Operations Director of AFC",

          nametarmar62:"Tarmar Menteshashvili",
          positiontarmar62:"Expread Co-founder",

          namewbh63:"Binhua Wu",
          positionwbh63:"Founder of UGCHAIN",

          nameck64:"Cyrus Khajvandi",
          positionck64:"NSF&HHMI Researcher, Stanford Univerisity, Co-founder & CEO of BitBounce.io",

          namehqt65:"Justin He",
          positionhqt65:"CEO of HLWCHAIN",

          nameybz66:"YangBing Zhan",
          positionybz66:"CEO of CoinBene",

          nametoni67:"Toni",
          positiontoni67:"CEO of sgamer",

          nameljl68:"Jialing  Liu",
          positionljl68:"Director of BTS,Co-Founder of BTC venture camp, Co-Founder of YOYOW",

          namegyl69:"Zack_Gao",
          positiongyl69:"Co-Founder of  International Blockchain Application Federation",
      },
      jap: {
        seey1: "トップページ",
        hyyc2: "アジェンダー",
        zzhz3: "スポンサー",
        wjhg4: "過去のレビュー",
        gywm5: "我々について",
        hqmp6: "チケット取得",
        qyyj7: "企業展示参加或いは講演",
        wncp8:
          "ブランド認知度の樹立のためのプラットフォーム提供、共同主催関係の達成及び新製品の発表。",
        qybm9: "企業参加応募",
        grbm10: "個人参加応募",
        // xsly11: "早期割引価格：1588元、4月21日より通常価格：2800元",
        xsly11: "クリック個人志願し、サミットのチケット購入",
        grbm12: "個人応募",
        chjb13: "ご来賓",
        tzjg14: "投資機構",
        mtbd15: "メディア報道参加",
        qqgs16: "グローバルブロックチェン企業",
        gydh17: "大会について",
        fstj18:
          "FINWISEサミットは業界関係者間のコミュニケーションを強化し、世界的な金融技術の発展を促進することを目指します。我々は現在金融科技領域最も最前線のブロックチェン技術を主体とし、世界的に優秀な業界企業を結集し、未来金融技術及びブロックチェン技術応用発展を展望・推進します。",
        ckgd19: "もっと見る",
        lhzb20: "共同主催",
        mtxb21: "メディア協賛",
        xbfe22: "協賛者",
        pwzx23: "チケットに関する問い合わせ",
        zzzx24: "スポンサーに関する問い合わせ",
        gywm25: "我々をフォローする",

        fzyc26: "FINWISEサミット2018東京大会アジェンダ",
        hdbg28: "ブランドの披露",
        tghb29:
          "現場の展示を通じて、貴社のブランドイメージが各媒体のネットワークおよび大会会場に紹介され、有効的に貴社のブランドの認知度を上げることできます。FINWISEサミット東京は、2500名以上のご来賓の参加、東アジア800万以上のブロックチェン関係者にカバーされる予定です。本大会はサミット公式のFacebook、twitter等のSNSとは別に、大会開催の前後及び開催中、全方面大会及び大会とパートナーの情報を配信する。ブロックチェン業界の企業メディア、個人メディア、すべてのチャネル、多次元的にパートナー情報を披露する。",
        tzyh30: "潜在顧客を開拓する",
        tgjl31:
          "貴社の優秀製品及びサービスの展示を通じて、ユーザーを引き付け、ブランド認知度を高めることができます。FINWISEサミット東京では業界の規制とブロックチェーン上の国の政策について焦点を当て、議論します。より多くのブロックチェーン業界で最も熱い、最も代表的な産業企業リソースを募集し、協力と交流を促進する。",
        scsl32: "技術実力の出力",
        tgcx33:
          "プレゼンテーションを通じてプロジェクトの進捗状況を共有し、会社/チームの技術力を出力することで、ブランド認知度を高めることができます。 FINWISEサミット東京は、ブロックチェーンプロジェクトセミナーの特別セッション、カスタマイズ可能のブランドサブセッション等を提供します。業界見解の共有やプロジェクトの利点の解読等できる、ブロックチェーン業界の技術と革新を普及させる優れた講師の推薦を楽しみにしています。",
        bzzs34: "標準ブース招致",
        lhzb35: "共同主催",
        zsxb36: "ダイヤモンド共催者",
        jpzz37: "ゴールドスポンサー",
        ypzz38: "シルバースポンサー",
        tpzz39: "ブロンズスポンサー",
        gwms40: "公式ウェブサイトに掲載されるロゴと企業の説明",
        fhpp41: "サブミット出展者マニュアルに掲載される企業ブランド",
        fhbf42: "サミット中に再生された企業のウォームアップビデオ",
        fhgm43: "副会場のタイトルスポンサーシップ",
        mtzf44: "独占インタビュー",
        esyj45: "20分間の独立スピーチ",
        bzzt46: "標準ブース",
        wixz47: "VIPパスポート",
        jeeg48: "価格",

        dcqd50: "来賓受付",
        dhks51: "大会開始",
        hyzz52: "大会オープニングスピーチ",
        bcys53: "BCUA披露式",
        jgfz54: "規制技術は仮想通貨産業の発展を促進する仕組み",
        kxzx55: "管轄区域を跨る金融サービスのブロックチェーンの相互運用性",
        jgzy56: "支持政策の確立とガバナンスにおける規制当局の役割",
        qkcx49: "ブロックチェーンが社会生産性の革新を促進する仕組み",
        rhyy57: "ブロックチェン技術の汎用的な応用を促進する仕組み",
        fxkl58: "ベンチャーキャピタルとブロックチェーン",
        jmld59: "暗号化通貨価格と株市場の関連性",
        qkbg60: "ブロックチェン技術は未来金融の変革を起こす",
        jyhg61: "交換所の自律及びコンプライアンスの実現について",
        qkxz62: "ブロックチェーン応用の技術的限界",
        gsyh63: "コンセンサスシステムの進化",
        qkwl64: "ブロックチェンの過去、現在と未来",
        jywl65: "交換所の未来",
        gyjc66: "win-winの仕組みは未来会社の基盤です",
        qktd67: "ブロックチェーンのセキュリティの問題と痛みポイント",
        qkzn68: "ブロックチェンと人工知能",
        qkfz69: "移動端末でのブロックチェンの新展開",
        xyqs70: "次世代マイニングプールの発展動向",

        fhfz71:
          "FINWISEサミットは中国で最も影響力のあるブロックチェンサミットの一つです。チームは金融マーケットプロフェショナル及びブロックチェン業界エリートが構成される。コアメンバーはすべて有名な銀行、ブロックチェン会社、コンサルタント会社、金融会社、インターネット会社のメンバーです。時代の最も強力な頭脳を結集し、優れた企業を結集し、業界関係者間のコミュニケーションを強化し、世界的な金融技術の発展を促進することを目指します。",
        cewl72:
          "2017年以来、FINWISEは上海とマカオで開催され、約1万人が現場参加し、数百万人がンライン参加しました。国内外100以上のメディアの報道が行われました。2018年には、FINWISEが東京、ドバイ、香港各地で開催される予定です。さあ、ぜひこの大会にご参加頂き、より良い未来を一緒にこの目で確かめましょう。",
        zwhe73: "FINWISE組織委員会",
        hxcy74: "コアチームメンバー",

        cyqy75: "参加合作のスポンサーは以下の権益を獲得できます。"
      }
    },
    dom: {
      domI18n: "dom-i18n"
    }
  };
  var ins = {
    init: function() {
      this.initDom();
      this.render();
      this.addListen();
    },
    initDom: function() {
      ins.utils.each(opts.dom, function(item, key) {
        var doms = opts.element.querySelectorAll("[" + item + "]");
        opts.dom[key] = doms;
      });
    },
    render: function() {
      ins.utils.each(opts.dom.domI18n, function(dom, index) {
        //获取当前dom的文字对应key
        var key = dom.getAttribute("dom-i18n");
        //获取当前语言
        var lang = opts.i18n[opts.lang],
          txt = lang[key];
        if (txt && txt.length > 0) {
          //渲染文字
          dom.innerText = txt;
        }
      });
    },
    setLang: function(v) {
      opts.lang = v;
    },
    addListen: function() {
      Object.defineProperty(opts, "lang", {
        get: function() {
          return lang;
        },
        set: function(v) {
          lang = v;
          ins.render();
          localStorage.tyLang = v;
        }
      });
    },
    utils: {
      each: function(obj, callback) {
        //针对ie8
        if (obj == "[object StaticNodeList]") {
          for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i);
          }
          return;
        }
        //针对正常浏览器
        if (this.isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i);
          }
        }
        if (this.isNodeList(obj)) {
          for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i);
          }
        }
        if (this.isObject(obj)) {
          for (var key in obj) {
            callback(obj[key], key);
          }
        }
      },
      isString: function(obj) {
        return Object.prototype.toString.call(obj) == "[object String]";
      },
      isArray: function(obj) {
        return Object.prototype.toString.call(obj) == "[object Array]";
      },
      isNodeList: function(obj) {
        return Object.prototype.toString.call(obj) == "[object NodeList]";
      },
      isObject: function(obj) {
        return Object.prototype.toString.call(obj) == "[object Object]";
      },
      isNull: function(obj) {
        return Object.prototype.toString.call(obj) == "[object Null]";
      }
    }
  };
  ins.init();
  win.i18n = ins;
})(window);