import bkhn from "../img/bkhn.jpg"
import bkdn from "../img/bkdn.jpg"
import bcvt from "../img/bcvt.jpg"

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
	university: {
		introduction: {
			title: "ベトナムは若者の人国が多く、国としてもIT技術に力を入れていますので、IT業界での慢性的な人材不足を解決する国として注目されています。ワールドでも、ベトナムに注目して、2018年からIT人材の採用をしてきています。",
			description: [
            "ワールドのITチームでは、ベトナムのトップレベル大学とMOUを締結するとともに、情報処理系学部の卒業生たちを採用しています。",
			"ITチームのメンバーの卒業大学をご紹介します。",
			]
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
	}
};

export default aboutUsData;
