import szksensei from "../img/szksensei.jpg";
import huy from "../img/huy.jpg";
import loc from "../img/loc.jpg";
import yen from "../img/yen.jpg";
import vien from "../img/vien.jpg";
import duc from "../img/duc.jpg";
import dung from "../img/dung.jpg";
import linh from "../img/linh.jpg";
import tuan from "../img/tuan.jpg";
import bkhn from "../img/bkhn.jpg"
import bkdn from "../img/bkdn.jpg"
import bcvt from "../img/bcvt.jpg"
import tree from "../img/tree.jpg"
import logo from "../img/logo1.png"
import teamwork from "../img/teamwork.jpg"
import logo2 from "../img/logo2.png"

const aboutUsData = {
  introduction: {},
  philosophy: {
    title: "PHILOSOPHY",
    mindsets: [
      {
        title: "MISSION",
        description: "日本のに求められる高度IT人材を派遣する。",
      },
      {
        title: "VISION",
        description:
          "外国人IT技術者の「３つの壁」を乗り超える、最先端のIT技術を駆使して日本をサポートする。",
      },
    ],
    values: [
      {
        title: "言葉の壁",
        description:
          "普通の日本人と同じように、日本語の読み書きや会話ができる。",
        css: "round-title-list-item__title--greenbg",
      },
      {
        title: "文化の壁",
        css: "round-title-list-item__title--bluebg",
        description: "日本の文化を理解し、尊重しする。",
      },
      {
        title: "業務の壁",
        css: "round-title-list-item__title--redbg",
        description: "日本人の働き方を学び、仕事に役立つシステムを設計する。",
      },
    ],
  },
  teamwork: {
    image: {src: logo2, alt:"logo"},
    img: {src: teamwork, alt: "Team Work" },
    title: "ITチームの特徴",
    description:[
      {
        title: "日本が好き",
        subtitle: "全員が日本在住、日本に興味を持って一生懸命日本語を学び、日本で暮らし日本人と働いて、日本の良さを体験している技術者です。言葉や文化、そして業務の理解力で違いが出ます。"
      },
      {
        title: "技術が好き",
        subtitle: "全員が中興時代からIT興味を持ち、ベトナムまたは、日本で情報処理系の教育を受けた技術者です。好きなことだから頑張れる。また、最先端の技術を常に学んでいます。"
      },
      {
        title: "チームが好き",
        subtitle: "お互いを理解しあい、強い絆で結ばれたチームです。技術の習得も仕事も力を合わせて、最高の結果を出します。"
      },
    ],
   },
  memberintroduction:{
    title: "チームメンバー",
    description:"我々のチームは優秀なベトナムエンジン中心としたベトナムエンジンを設立します。かれらは有名なべトナム大学を卒業し有名な会社で働いた経験があるし。",
    memberLists:[
      {
        img: {
          src: szksensei ,
          alt: "szksensei",
        },
        title: "CTO 鈴木高弘",
        description: "これからの日本のIT業界に必要なスキルを身に着ける為の教育プログラムを監修しています。",
       
      },
      {
        
        img: {
          src: huy ,
          alt: "huy",
        },
        title: "Vu Duc Huyさん",
        description: "ベトナムであるハノイ工科大学で情報技術を卒業した後、日本に就職することにしました。私はインターネットというツールの魅力を最大限に活かし、クライアントのビジネスを成功へと導くサイトをつくりあげるプロとして、WEBデザインを手がけてきました。今後も顧客とコミュニケーションをとりながら、多くのサービスを提供できるエンジニアとしてスキルアップしていきたいと考えています。",
      },

      {
        img: {
          src: loc ,
          alt: "loc",
        },
        title: "Tran Minh Locさん",
        description: "ベトナムであるハノイ工科大学で情報技術を卒業した後、日本に就職することにしました。私はインターネットというツールの魅力を最大限に活かし、クライアントのビジネスを成功へと導くサイトをつくりあげるプロとして、WEBデザインを手がけてきました。今後も顧客とコミュニケーションをとりながら、多くのサービスを提供できるエンジニアとしてスキルアップしていきたいと考えています。",
       
      },

      {
        img: {
          src: yen,
          alt: "yen",
        },
        title: "Dao Hai Yenさん",
        description: "私はダオ・ハイ・イエンと申します。郵政電信工芸 学院での専攻はITです。大学卒業して担当したプロジェクトは病院や銀行や電子情 報やイントラネットに関するものです。私はテスターとし て参加していました。プロジェクトの開発環境はジャーバ 、シェアポイント、アイオーエスやアンドロイドなどです 。私は調査、分析、テスト、管理を担当しました。 テストについて単体テスト、結合テストとシステムテストを 担当しました。将来、私は色々 な技術を学びたいです。",
      },

      {
        img: {
          src: vien,
          alt: "vien",
        },
        title: "Ha Lam Vienさん",
        description: "ダナン工科大学に電子通信学部を卒業した後ベトナムに日本精機株式会社のブランチで働きました。日本精機会社で組込システムのプロジェクトに約二年間働きました。車メータのソフトに関する仕事、詳細設計、コーディング、単体テスト、結合テストなどの開発を経験しました。日本にてITの知識や経験をもっと伸ばしていきたいと思い、ワールド会社に入社して、今まで1年半働いています。プロジェクトの言語は、C、Javaなどを習得しました。特に、C言語は実務経験がありました。日本に就職する目的は、技術・スキルを向上させて、日本語を勉強します。 ",
      },

      {
        img: {
          src: duc,
          alt: "duc",
        },
        title: "Vu Anh Ducさん",
        description: "どうも、初めまして！ 今期から新たにワルードITチームの一員として活動させていただく事になった山口短期大学情報メディア学部の　ヴ　アインドｳックと言います！出身はベトナムのハノイです。来日してからちょうど２年迎えました。経験が浅くて分からないことが多いかもしれませんがワルードチームでは”一人じゃない”で先輩たちは優しく教え頂いた本当に有り難い！ 顧客満足のため、良い品質、生産性を高めるようにすると考えています。 精一杯頑張りますので、宜しくお願い致します！ ",
      },
      {
        img: {
          src: dung,
          alt: "dung",
        },
        title: "Bui Xuan Dungさん",
        description: "私はテクノロジーに関する新しい製品や技術に関心を持っています。積極的な考え方で、好きなことであれば、失敗する可能性があっても、一度チャレンジしてみたいです。また、友達から私が真面目な人だとよく言われています。日本語についてわからないことが多いため、人の前で話すのはよく緊張してしまいます。最近日本語の勉強を含め、話し方をよく練習しますので、ますます改善できています。 ",
      },

      {
        img: {
          src: linh,
          alt: "linh",
        },
        title: "Nguyen Van Linhさん",
        description: "ベトナムのハティンから来ました。今年の3月に卒業したばかりなので実際の勤務経験がないです。ワールドに入社して、ホームページ作成したり、デザインを作ったり、プロジェクトの接近から完成させるまでの流れ等を色な勉強が出来て良かったです。将来プロSEに目指している私はIT関連の勉強一生懸命行っています。 ",
      },
      {
        img: {
          src: tuan,
          alt: "tuan",
        },
        title: "Pham Quoc Tuanさん",
        description: "現在、岐阜県の現場に在駐し、Web開発を行っています。現在のプロジェクトに参加する前は、Webを使用した業務経験があまりなかったのですが、丁寧に教えてもらえたので、安心して業務に取り組めました。色々な開発業務に携われていて、やりがいは大きいです。プロジェクトの納期は短い場合が多いので、速く正しく仕事を理解することが大事になってきます。",
      },
    ],
  },
  university: {
		introduction: {
      title: "ベトナムは若者の人国が多く、国としてもIT技術に力を入れていますので、IT業界での慢性的な人材不足を解決する国として注目されています。ワールドでも、ベトナムに注目して、2018年からIT人材の採用をしてきています。",
      subtitle: "ベトナムの大学",
			descriptions: [
          "ワールドのITチームでは、ベトナムのトップレベル大学とMOUを締結するとともに、情報処理系学部の卒業生たちを採用しています。",
			    "ITチームのメンバーの卒業大学をご紹介します。",
      ],
      img: {
        src: tree,
        alt: "tree"
      },
      logo: {
        src: logo,
        alt: "logo"
      }
		},
		universityItem: [
			{
				name: "ハノイ 工科大学",
				description: [
					{
						title: "経歴",
						subtitle: ["1956 創立"]
					},
					{
						title: "特徴",
						subtitle: ["ハノイ工科大学は、ベトナムで最初の国立工科大学として創立された。その後エンジニアの訓練のための機関や国のほとんど全ての工業部局のための科学研究のための機関としての役割を担っている。"]
					},
					{
						title: "規模",
						subtitle: ["学部生：33,000名以上", "大学院生：3,600名以上（修士課程学生 ：3,000名以上、博士課程学生：600名）" , "教職員：1,748名、（うち教授・准教授：259名, 博士：765名）"]
					},
				],
				img: {
					src: bkhn,
					alt: "Bach khoa HN",
				},
				link: "https://hust.edu.vn/",
				color: ["#DCB7AF", "#DCB7AF"], 
			},
			{
				name: "ダナン工科大学",
				description: [
					{
						title: "経歴",
						subtitle: ["1953 創立"]
					},
					{
						title: "特徴",
						subtitle: ["ダナン工科大学は、ダナン大学傘下の技術系大学。ダナン工科大学の卒業生たちの多くが専門家として、ベトナム国内の学術、経済、教育などの発展を支えている。大学の位置するダナン市は、ベトナム５大都市のひとつで。"]
					},
					{
						title: "規模",
						subtitle: ["学部生：14,000名以上" , "教職員：830名、（うち教授・准教授：63名,  博士：295名 ）"]
					},
				],
				img: {
					src: bkdn,
					alt: "Bach Khoa DN",
				},
				link: "http://dut.udn.vn/",
				color: ["#E4E8DB", "#374240"]
			},
			{
				name: "郵政電信工芸学院",
				description: [
					{
						title: "経歴",
						subtitle: ["1975 創立"]
					},
					{
						title: "特徴",
						subtitle: ["郵政電信工芸学院は、研究力の評判の高い研究教育機関です。 情報通信技術の大学院および大学院教育があります。 アカデミーは、情報通信省の訓練機関です。"]
					},
					{
						title: "規模歴",
						subtitle: ["学部生：15,000名以上", "大学院生：400名以上" , "教職員：767名、（うち  博士：112名 ）"]
					},
				],
				img: {
					src: bcvt,
					alt: "BCVT",
				},
				link: "https://portal.ptit.edu.vn/",
				color: ["#2A323F", "#2A323F"],
			},
		],
	},
};

export default aboutUsData;
