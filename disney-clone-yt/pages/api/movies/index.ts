import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      id: 1,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09A0617D43282F1A4FA1A97DF6159B4263A8DEB9679A007B61D5E5D6E5D0A2DD/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "Watch with Premier Access at the same time it's in open theaters and before it's available to all Disney+ subscribers on June 4, 2021.",
      subTitle: "2021 • 1h 52m • Family, Fantasy, Animation, Action-Adventure",
      title: "Raya",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7D8EFFDD30B2A0E205DDD9929207439B21E7595709769F2A23C50457664FFB2/scale?width=1440&aspectRatio=1.78",
      type: "new",
    },
    {
      id: 2,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "Moana sets sail on a daring mission to save her people. Along the way, she meets the mighty demigod Maui together they cross the ocean on a fun-filled, action-packed voyage from Walt Disney Animation Studios.",
      subTitle:
        "2016 • 1h 47m • Family, Fantasy, Animation, Action-Adventure, Musical",
      title: "Moana",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9562874BAB22B22A698368819B9EBF30FEB0291543552EB2416A5A61A73F63F4/scale?width=1440&aspectRatio=1.78",
      type: "trending",
    },
    {
      id: 3,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/223DAE104BE1175F374C4AACAC0EB5B8B0DB9C49839AA2E10085533DDFE07A8E/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.",
      subTitle: "1989 - 2019 • 31 Seasons • Comedy, Animation",
      title: "The Simpsons",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47A6FB38D95B3A5EF5583C9EED0B698ED2992CBA4AC7222DD3269DC92DFA03A6/scale?width=1440&aspectRatio=1.78",
      type: "trending",
    },
    {
      id: 4,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "When the kingdom's most wanted bandit is taken hostage by Rapunzel — a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years — the unlikely duo sets off on a hair-raising escapade.",
      subTitle:
        "2010 • 1h 40m • Family, Fantasy, Animation, Action-Adventure, Musical",
      title: "Tangled",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78",
      type: "trending",
    },
    {
      id: 5,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "Garfield is adopted by a greedy Lord with nefarious plans to open up his estate as a hunting ground.",
      subTitle: "2006 • 1h 19m • Family, Comedy, Kids",
      title: "A tail of two kitties",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50B933E83609BEEFEDFA177A6D96DBFA7804C14F70A0B5AB314E892E65498ACF/scale?width=1440&aspectRatio=1.78",
      type: "new",
    },
    {
      id: 6,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D1A6FD00ED479CC5E2E5C3E85F10EB05550748BD3C0FE76756614071968541/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
      description:
        "Marvel Studios LEGENDS traces Wanda Maximoffs evolution from an adversary of The Avengers to a powerful ally, and highlights one special relationship destined to shape her future in unexpected ways…",
      subTitle: "2021 • 1 Season • Science Fiction, Fantasy, Action-Adventure",
      title: "Legends",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDFF0FDF457E092EE53149CE7DB5BD14CB97E27B92D2D087E7C687B4E3073DE2/scale?width=1440&aspectRatio=1.78",
      type: "original",
    },
    {
      id: 7,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28F85D4A1F7CA135B7B20B3EDB42EDA73196C2A71C52C5400A6C2285F8E071BE/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C0C358E9FF348FB0338AD13F9A5836808E9EF5FADD9DBDE52FC3CAD/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "J-Pop band Perfume is featured in this original music and documentary series 'Disneys My Music Story.' The show features Perfume's life stories, passion for music, Disney memories, and more.",
      subTitle: "2019 • 53m • Documentary, Biographical, Music",
      title: "My music story",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97BB36F8B9FC053F561894DD7B1C42C4FD20E63560F481CBCB3B9D3600CFCA3B/scale?width=1440&aspectRatio=1.78",
      type: "new",
    },
    {
      id: 8,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D53D1F5D357587A8D09067AB09FFC7096F837CBAAE02BDC3C0E75814471A1E36/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
      description:
        "ASSEMBLED is an immersive series of documentary-style specials examining the creation of Marvel Studios thrilling new shows and theatrical releases.",
      subTitle: "2021 • 1 Season • Docuseries, Anthology",
      title: "Assembled",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/37D80C5D1AB0BA65C63588311EC60A07342F60F91D402C28B8E1137AF6A30549/scale?width=1440&aspectRatio=1.78",
      type: "original",
    },
    {
      id: 9,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09DAD6A5DAECB6BA9E329FFA896B18978FE4AD5540C070D7973EE53357DD4D24/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "When Bob Parr visits designer Edna Mode for help with his high-energy toddler, she pulls an all-nighter designing a supersuit to harness Jack-Jacks seemingly limitless powers.",
      subTitle: "2018 • 7m • Family, Comedy, Animation",
      title: "Auntie EDNA",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A31BE6502DC7A3A01DAF58DF7E91AB6FF598A078C8FA88A1DB2D7B7E25439464/scale?width=1440&aspectRatio=1.78",
      type: "recommend",
    },
    {
      id: 10,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
      description:
        "Marvel Studios “The Falcon and The Winter Soldier” stars Anthony Mackie as Sam Wilson aka The Falcon, and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of “Avengers: Endgame,” team up on a global adventure that tests their abilities—and their patience.",
      subTitle: "2021 • 1 Season • Science Fiction, Action-Adventure, Buddy",
      title: "The falcon and the winter soldier",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4A67A42FB16607DAE7E22266D3F00181965178ED1884047C2D982EE7D89D3554/scale?width=1440&aspectRatio=1.78",
      type: "new",
    },
    {
      id: 11,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6FF2B403436E6558C08FB44B40AE334A9172FA293A8325940E8E7FF7F696E4D3/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "Mickey entertains preschoolers by inviting them to join him and his friends for a date at the Clubhouse. Using early math learning and problem solving skills, he leads kids on an interactive adventure of learning and fun.",
      subTitle: "2006 - 2013 • 5 Seasons • Kids, Animation",
      title: "Mickey mouse",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4FF3FCD567F0263430DFC33B9489CE2799AE33B50AD553DE65F03B3EA2E19828/scale?width=1440&aspectRatio=1.78",
      type: "trending",
    },
    {
      id: 12,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
      subTitle: "2015 • 1h 35m • Coming of Age, Family, Animation",
      title: "Inside Out",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78",
      type: "recommend",
    },
    {
      id: 13,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "While Helen is called on to lead a campaign to bring back the Supers, Bob navigates the day-to-day heroics of “normal” life at home with Violet, Dash and Jack-Jack, whose superpowers are about to be discovered. Their mission is derailed, however, when a new villain emerges with a brilliant and dangerous plot that threatens everything. But with Frozone by their side, the Parrs can take on anything.",
      subTitle:
        "2018 • 1h 58m • Science Fiction, Family, Animation, Action-Adventure",
      title: "Incredibles 2",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78",
      type: "recommend",
    },
    {
      id: 14,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A5E2BEF1F5656AD21A3010146A9ADC469B754318C6EF2934A0AC19F7486C5150/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0F0BF7366B84F6E768E478A59E59E124E38B658C32E3CCF8BCA5B1950CA216D5/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "In Marvel Studios “Doctor Strange in the Multiverse of Madness,” the MCU unlocks the Multiverse and pushes its boundaries further than ever before. Journey into the unknown with Doctor Strange, who, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
      subTitle:
        "2022 • 2h 8m • Science Fiction, Fantasy, Action-Adventure, Super Hero",
      title: "Doctor Strange In The Multiverse Of Madness",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7117086D0FB973554C63B533687E7D49F259C18C59BF6356CE0511C2B47B8C78/scale?width=1440&aspectRatio=1.78&format=png",
      type: "recommend",
    },
    {
      id: 14,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/481B13AE2BF85A7953C44C519800E4F37E595705C204E8AE210E990D0CA49D33/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/175B7CA3910F0B93C22E196B626571C134AF6F9B744BB8390070E38F89314E2B/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      description:
        "Explore the evolution of Buzz Lightyear from toy to human in the making of Pixars Lightyear. Dive into the origin and cultural impact of everyones favorite Space Ranger, the art of designing a new “human Buzz,” and the challenges faced by the Lightyear crew along the way.",
      subTitle: "2022 • 35m • Documentary",
      title: "Beyond Infinity Buzz And The Journey To Lightyear",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/892DD8EDB99294A1ED5695B56BD573CE7D0B0C82886A38464399279EED24B76C/scale?width=1440&aspectRatio=1.78&format=png",
      type: "trending",
    },
    {
      id: 15,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C2FD25C2B1BA3912BDA419ADB4FE8BA0F869134F1577777376F230EE36DA13BF/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CECA96C5D42F1C78B2343D9F53D526F9D3FB2EA76742CE5B29C03505532CF0FE/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "A sumptuous chronicle of the life of 18th-century aristocrat Georgiana, Duchess of Devonshire, who was reviled for her extravagant political and personal life.",
      subTitle: "2008 • 1h 50m • Drama, Biographical, Buddy",
      title: "The Duchess",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E8A7156D7F78A4C5713DF044D050D20BC44F9D24C62F095E4DECD6B7CE8A535/scale?width=1440&aspectRatio=1.78&format=png",
      type: "new",
    },

    {
      id: 16,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/18F9869384FBD5725BB3316230D2EF5383E0300EE60E5681A23DF55C4DDD4DCD/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B606EF36712FE9A3C3DE05E7C9FCCB142B725411857BA94AF0DD0F6860A183B/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      description:
        "Marvel Studios 'Ms. Marvel' is an original series that introduces Kamala Khan, a Muslim American teenager growing up in Jersey City. An avid gamer and a voracious fan-fiction scribe, Kamala is a Super Hero mega fan with an oversized imagination—particularly when it comes to Captain Marvel. Yet Kamala feels like she doesnt fit in at school and sometimes even at home—that is, until she gets super powers like the heroes shes always looked up to. Life gets better with super powers, right?",
      subTitle:
        "2022 • 1 season • Coming of Age, Comedy, Super Hero, Action-Adventure",
      title: "Ms Marvel",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C45AA585728BCEA5F89F94F64CDB721509FBECEB1780320FB9E188971D2E8BAC/scale?width=1440&aspectRatio=1.78&format=png",
      type: "recommend",
    },
    {
      id: 17,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C474A717CDB5CC44F24F82360789130EA7B86CF6BBAE935B85A095DF05A658E7/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F09F64D8A9ED99E7E4F34D0482F646D7F5F20EF7E80F1BA89E217E0CBC0B6E98/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      description:
        "When Steven Grant, a mild-mannered gift shop employee, becomes plagued with blackouts and memories of another life, he discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marcs enemies converge upon them, they must navigate their complex identities while involved in a deadly mystery among the powerful gods of Egypt.",
      subTitle: "2021 • 1 Season • Fantasy, Super Hero, Action-Adventure",
      title: "Moon Knight",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/76A2EA7F1A6B20AC4BE4AA5262DE545092BD5B472C2BD12EE62DF277803B5127/scale?width=1440&aspectRatio=1.78&format=png",
      type: "original",
    },
    {
      id: 18,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/809D9B60F5E18483F91B5D3E12B01787013D55D6DFA06DCCBF3B46BA175D1F82/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/014EB7512A273B779CEA4D6DB681731FD72F7F6755AED5A2035D116F60874A03/scale?width=400&aspectRatio=1.78&format=jpeg",
      description:
        "Disneys 'Jungle Cruise' is a rollicking thrill ride down the Amazon with wisecracking skipper Frank Wolff and intrepid researcher Dr. Lily Houghton. Lily travels from London to the Amazon jungle and enlists Franks questionable services to guide her downriver on La Quila, his ramshackle but charming boat, to uncover an ancient tree with unparalleled healing abilities.",
      subTitle:
        "2021 • 2h 19m • Romance, Family, Comedy, Fantasy, Action-Adventure",
      title: "Jungle Cruise",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/736F1E286379C7423ED0AEDE438A3E70ACC471FB4FD92BC89B8B5F54FBE62456/scale?width=1440&aspectRatio=1.78&format=png",
      type: "original",
    },
    {
      id: 19,
      backgroundImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8475544CC69612B1AFDB60103ED6D1C6C9319A67918E51491E87FB4BD67B1186/scale?width=1440&aspectRatio=1.78&format=jpeg",
      cardImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BCED3759CDDB33A1DEA354A965B8BFC46048CF09817CAE548E5B3D018CC60F74/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      description:
        "When George Lucas set out to make Star Wars, little did he know he would end up revolutionising an industry. This six-part series charts the evolution of Industrial Light & Magic, the company responsible for the iconic visual effects of Star Wars, E.T., Terminator 2, Jurassic Park and so many other films. This is the story of a team of creative geniuses who put the magic in the movies we love.",
      subTitle: "2022 • 1 season • Docuseries",
      title: "Light & Magic",
      titleImg:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/821933CE363463FBB1A80DD16A2826F2D671C767C18F6F50171D707A0954EBAB/scale?width=1440&aspectRatio=1.78&format=png",
      type: "original",
    },
  ]);
}
