const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const SECRET_KEY = "eastzoo123";




router.get("/book", (req, res, next) => {
  console.log(req.body);
  //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
  try {
    return res.json({
      msg: "전체 영상목록",
      success: true,
      detail: [
        {
          "adult": false,
          "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
          "genre_ids": [
            878,
            12,
            14,
            28
          ],
          "id": 76600,
          "original_language": "en",
          "original_title": "Avatar: The Way of Water",
          "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
          "popularity": 8054.532,
          "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
          "release_date": "2022-12-14",
          "title": "Avatar: The Way of Water",
          "video": false,
          "vote_average": 8.1,
          "vote_count": 1151
        },
        {
          "adult": false,
          "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
          "genre_ids": [
            28,
            14,
            878
          ],
          "id": 436270,
          "original_language": "en",
          "original_title": "Black Adam",
          "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
          "popularity": 3057.839,
          "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
          "release_date": "2022-10-19",
          "title": "Black Adam",
          "video": false,
          "vote_average": 7.2,
          "vote_count": 3219
        },
        {
          "adult": false,
          "backdrop_path": "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
          "genre_ids": [
            16,
            14,
            18
          ],
          "id": 555604,
          "original_language": "en",
          "original_title": "Guillermo del Toro's Pinocchio",
          "overview": "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
          "popularity": 2312.854,
          "poster_path": "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
          "release_date": "2022-11-09",
          "title": "Guillermo del Toro's Pinocchio",
          "video": false,
          "vote_average": 8.5,
          "vote_count": 988
        },
        {
          "adult": false,
          "backdrop_path": "/7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
          "genre_ids": [
            28,
            18,
            36
          ],
          "id": 724495,
          "original_language": "en",
          "original_title": "The Woman King",
          "overview": "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
          "popularity": 1926.312,
          "poster_path": "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
          "release_date": "2022-09-15",
          "title": "The Woman King",
          "video": false,
          "vote_average": 7.8,
          "vote_count": 839
        },
        {
          "adult": false,
          "backdrop_path": "/7dm64SW5L5CCg47kAEAcdCGaq5i.jpg",
          "genre_ids": [
            27,
            53
          ],
          "id": 676547,
          "original_language": "en",
          "original_title": "Prey for the Devil",
          "overview": "In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.",
          "popularity": 1823.405,
          "poster_path": "/w3s6XEDNVGq5LUlghqs6VlvsvL6.jpg",
          "release_date": "2022-10-23",
          "title": "Prey for the Devil",
          "video": false,
          "vote_average": 6.7,
          "vote_count": 159
        },
        {
          "adult": false,
          "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
          "genre_ids": [
            28,
            12,
            878
          ],
          "id": 505642,
          "original_language": "en",
          "original_title": "Black Panther: Wakanda Forever",
          "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
          "popularity": 1564.377,
          "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
          "release_date": "2022-11-09",
          "title": "Black Panther: Wakanda Forever",
          "video": false,
          "vote_average": 7.5,
          "vote_count": 1437
        },
        {
          "adult": false,
          "backdrop_path": "/sfw4m2tOgQRzhF6VXxaXGfd1vX.jpg",
          "genre_ids": [
            28,
            12,
            14,
            878
          ],
          "id": 19995,
          "original_language": "en",
          "original_title": "Avatar",
          "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
          "popularity": 1423.375,
          "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
          "release_date": "2009-12-15",
          "title": "Avatar",
          "video": false,
          "vote_average": 7.5,
          "vote_count": 27154
        },
        {
          "adult": false,
          "backdrop_path": "/zNE4oUkZnpbCpFiJbbaX4YJOPmE.jpg",
          "genre_ids": [
            28,
            80
          ],
          "id": 1024546,
          "original_language": "en",
          "original_title": "Detective Knight: Rogue",
          "overview": "As Los Angeles prepares for Halloween, mask-wearing armed robbers critically wound detective James Knight’s partner in a shootout following a heist. With Knight in hot pursuit, the bandits flee L.A. for New York, where the detective’s dark past collides with his present case and threatens to tear his world apart…unless redemption can claim Knight first.",
          "popularity": 1193.877,
          "poster_path": "/2wj5iUJ2B5AQ1lFctJgUrHHsp9B.jpg",
          "release_date": "2022-10-21",
          "title": "Detective Knight: Rogue",
          "video": false,
          "vote_average": 6.2,
          "vote_count": 24
        },
        {
          "adult": false,
          "backdrop_path": "/g9Kb3RaLjsybI1jpqHQ3QZTCYpB.jpg",
          "genre_ids": [
            28,
            35,
            80,
            53
          ],
          "id": 899112,
          "original_language": "en",
          "original_title": "Violent Night",
          "overview": "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
          "popularity": 1775.115,
          "poster_path": "/1CHp8QQjGwqWaPZWjzcRidlt5Xs.jpg",
          "release_date": "2022-11-30",
          "title": "Violent Night",
          "video": false,
          "vote_average": 7.6,
          "vote_count": 366
        },
        {
          "adult": false,
          "backdrop_path": "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
          "genre_ids": [
            14,
            28,
            35,
            80
          ],
          "id": 1013860,
          "original_language": "en",
          "original_title": "R.I.P.D. 2: Rise of the Damned",
          "overview": "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
          "popularity": 1129.717,
          "poster_path": "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
          "release_date": "2022-11-15",
          "title": "R.I.P.D. 2: Rise of the Damned",
          "video": false,
          "vote_average": 6.7,
          "vote_count": 274
        },
        {
          "adult": false,
          "backdrop_path": "/clO1mWRYT24ogzN3o6LsqHjqrQu.jpg",
          "genre_ids": [
            28,
            35,
            80
          ],
          "id": 683328,
          "original_language": "id",
          "original_title": "The Big 4",
          "overview": "A by-the-book female detective teams up with four down-on-their-luck assassins to investigate her father's murder.",
          "popularity": 970.18,
          "poster_path": "/jrw684BhFJZ9Jac6KJda3hSQkxt.jpg",
          "release_date": "2022-12-19",
          "title": "The Big 4",
          "video": false,
          "vote_average": 6.9,
          "vote_count": 36
        },
        {
          "adult": false,
          "backdrop_path": "/vNuHqmOJRQXY0PBd887DklSDlBP.jpg",
          "genre_ids": [
            16,
            12,
            35,
            10751,
            14
          ],
          "id": 315162,
          "original_language": "en",
          "original_title": "Puss in Boots: The Last Wish",
          "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
          "popularity": 926.151,
          "poster_path": "/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg",
          "release_date": "2022-12-07",
          "title": "Puss in Boots: The Last Wish",
          "video": false,
          "vote_average": 8,
          "vote_count": 92
        },
        {
          "adult": false,
          "backdrop_path": "/rodjjIJ8oh9nuBp86PhojcYHTEN.jpg",
          "genre_ids": [
            28,
            53,
            80,
            18
          ],
          "id": 740952,
          "original_language": "en",
          "original_title": "Savage Salvation",
          "overview": "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
          "popularity": 1292.101,
          "poster_path": "/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg",
          "release_date": "2022-12-02",
          "title": "Savage Salvation",
          "video": false,
          "vote_average": 4.4,
          "vote_count": 9
        },
        {
          "adult": false,
          "backdrop_path": "/AokFVAl1JVooW1uz2V2vxNUxfit.jpg",
          "genre_ids": [
            36,
            28,
            18
          ],
          "id": 551271,
          "original_language": "en",
          "original_title": "Medieval",
          "overview": "The story of 14th century Czech icon and warlord Jan Zizka who defeated armies of the Teutonic Order and the Holy Roman Empire.",
          "popularity": 914.592,
          "poster_path": "/eeUNWsdoiOijOZAMaWFDA5Pb1n8.jpg",
          "release_date": "2022-09-08",
          "title": "Medieval",
          "video": false,
          "vote_average": 7.2,
          "vote_count": 237
        },
        {
          "adult": false,
          "backdrop_path": "/5aSvzECXrtABcIh7fZYkH2K6ttC.jpg",
          "genre_ids": [
            28,
            53,
            80
          ],
          "id": 972313,
          "original_language": "en",
          "original_title": "Blowback",
          "overview": "When a master thief is sabotaged during a bank heist and left for dead, he seeks revenge on his former crew one target at a time. Now, with the cops and the mob closing in, he's in the race of his life to reclaim an untold fortune in cryptocurrency from those who double-crossed him.",
          "popularity": 864.101,
          "poster_path": "/fHQHC32dhom8u0OxC2hs2gYQh0M.jpg",
          "release_date": "2022-06-17",
          "title": "Blowback",
          "video": false,
          "vote_average": 5.9,
          "vote_count": 29
        },
        {
          "adult": false,
          "backdrop_path": "/ypFD4TJ3nLJesou76V59CnweaT0.jpg",
          "genre_ids": [
            36,
            18,
            53,
            28
          ],
          "id": 715931,
          "original_language": "en",
          "original_title": "Emancipation",
          "overview": "Inspired by the gripping true story of a man who would do anything for his family—and for freedom. When Peter, an enslaved man, risks his life to escape and return to his family, he embarks on a perilous journey of love and endurance.",
          "popularity": 678.665,
          "poster_path": "/s9sUK1vAaOcxJfKzNTszrNkPhkH.jpg",
          "release_date": "2022-12-02",
          "title": "Emancipation",
          "video": false,
          "vote_average": 8.2,
          "vote_count": 437
        },
        {
          "adult": false,
          "backdrop_path": "/wMNY6tU9WOUeAMRfqbCYwceOl9u.jpg",
          "genre_ids": [
            16,
            10751,
            14,
            18
          ],
          "id": 1001865,
          "original_language": "en",
          "original_title": "Scrooge: A Christmas Carol",
          "overview": "On a cold Christmas Eve, selfish miser Ebenezer Scrooge has one night left to face his past — and change the future — before time runs out.",
          "popularity": 591.755,
          "poster_path": "/nOrnzHn9SCF6JTXfX02eSPyAAXL.jpg",
          "release_date": "2022-11-18",
          "title": "Scrooge: A Christmas Carol",
          "video": false,
          "vote_average": 7.4,
          "vote_count": 138
        },
        {
          "adult": false,
          "backdrop_path": "/c1bz69r0v065TGFA5nqBiKzPDys.jpg",
          "genre_ids": [
            35,
            10751,
            10402
          ],
          "id": 830784,
          "original_language": "en",
          "original_title": "Lyle, Lyle, Crocodile",
          "overview": "When the Primm family moves to New York City, their young son Josh struggles to adapt to his new school and new friends. All of that changes when he discovers Lyle — a singing crocodile who loves baths, caviar and great music — living in the attic of his new home. But when Lyle’s existence is threatened by evil neighbor Mr. Grumps, the Primms must band together to show the world that family can come from the most unexpected places.",
          "popularity": 500.934,
          "poster_path": "/irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg",
          "release_date": "2022-10-07",
          "title": "Lyle, Lyle, Crocodile",
          "video": false,
          "vote_average": 7.8,
          "vote_count": 207
        },
        {
          "adult": false,
          "backdrop_path": "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
          "genre_ids": [
            28,
            18
          ],
          "id": 361743,
          "original_language": "en",
          "original_title": "Top Gun: Maverick",
          "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete Maverick Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
          "popularity": 565.307,
          "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
          "release_date": "2022-05-24",
          "title": "Top Gun: Maverick",
          "video": false,
          "vote_average": 8.3,
          "vote_count": 5148
        },
        {
          "adult": false,
          "backdrop_path": "/tlin6STxxVoln0f818sEQYH7PyC.jpg",
          "genre_ids": [
            27,
            53
          ],
          "id": 663712,
          "original_language": "en",
          "original_title": "Terrifier 2",
          "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
          "popularity": 467.499,
          "poster_path": "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
          "release_date": "2022-10-06",
          "title": "Terrifier 2",
          "video": false,
          "vote_average": 7,
          "vote_count": 784
        }
      ],
    });
  } catch (e) {
    return res.json(e);
  }
});
router.get("/book/:id", (req, res, next) => {
  console.log(req.body);
  //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
  try {
    return res.json({
      msg: "영상 상세 페이지",
      success: true,
      detail: {
        "adult": false,
        "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
        "genre_ids": [
          878,
          12,
          14,
          28
        ],
        "id": req.params.id,
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "popularity": 8054.532,
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "release_date": "2022-12-14",
        "title": "Avatar: The Way of Water",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1151
      }
    });
  } catch (e) {
    return res.json(e);
  }
});



module.exports = router;

