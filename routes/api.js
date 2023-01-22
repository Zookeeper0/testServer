const express = require("express");
const router = express.Router();

// 로그인
router.post("/oauth", (req, res, next) => {
    console.log(req.body);
    //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
    try {
        return res.json({
            msg: "jwt발급",
            success: true,
            detail:
                "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTQ4MTg1MzE0Iiwibmlja25hbWUiOiLsobDrj5ntlZgiLCJpbWciOiJodHRwOi8vay5rYWthb2Nkbi5uZXQvZG4vYnZza0NIL2J0clJlSnk4ZHczL3ZUWkRRVGtUejFFUXFaUnZxcm1JUTAvaW1nXzY0MHg2NDAuanBnIiwiaWF0IjoxNjcwMzkzMzE2LCJleHAiOjE2NzAzOTUxMTZ9.6L0lmJMYIrqLyzX5baTMf4pzpLno1Reg_zwtwmTNUFA",
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// 메인 모든영상 불러오기
router.get("/video", (req, res, next) => {
    console.log(req.body);
    //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
    try {
        // throw Error()
        return res.json({
            msg: "전체 영상목록",
            success: true,
            detail: [
                {
                    "id": 19,
                    "url": "GKLQy8UrVlM",
                    "user": {
                        "id": "2552169408",
                        "nickName": "최민성",
                        "imgUrl": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg"
                    },
                    "likeCount": 1
                },
                {
                    "id": 17,
                    "url": "ib3sKFtdJpQ&t",
                    "user": {
                        "id": "2552169408",
                        "nickName": "최민성",
                        "imgUrl": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg"
                    },
                    "likeCount": 6
                }
            ]
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// POST 영상 추가
router.post("/video", (req, res, next) => {
    console.log(req.body);
    //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
    try {
        return res.json({
            "msg": "영상 추가",
            "success": true,
            "detail": {
                "id": 26,
                "url": req.body.url,
                "user": {
                    "id": "2552169408",
                    "nickName": "최민성",
                    "imgUrl": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg"
                },
                "likeCount": 0
            }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// GET 영상 상세페이지
router.get("/video/:videoId", (req, res, next) => {
    console.log(req.params);
    //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
    try {
        return res.json({
            "msg": "상세 영상 조회 성공",
            "success": true,
            "detail": {
                "videoId": 26,
                "url": "Vd8RHN6h9-4",
                "videoLike": [
                    {
                        "id": 20,
                        "userId": "25481845314"
                    }
                ],
                "comments": [
                    {
                        "commentId": 39,
                        "comment": "안녕하세요!!",
                        "user": {
                            "id": "2552169408",
                            "nickName": "최민성",
                            "imgUrl": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg"
                        }
                    }
                ]
            }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// POST 영상 좋아요 추가
router.post("/like", (req, res, next) => {
    console.log(req.params);
    //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
    try {
        return res.json({
            "msg": "영상 좋아요 추가 성공",
            "success": true,
            "detail": {
                "id": 21,
                "userId": "2548185314"
            }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// DELETE 영상 좋아요 삭제
router.delete("/like/:videoLikeId", (req, res, next) => {
    console.log(req.params);
    //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
    try {
        return res.json({
            "msg": "영상 좋아요 삭제 성공",
            "success": true,
            "detail": {
                "id": 21
            }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// POST 댓글추가
router.post("/comment", (req, res, next) => {
    console.log(req.params);
    //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
    try {
        return res.json({
            "msg": "댓글 추가 성공",
            "success": true,
            "detail": {
                "commentId": 39,
                "comment": req.body.comment,
                "user": {
                    "id": "2548185314",
                    "nickName": "조동하",
                    "imgUrl": "http://k.kakaocdn.net/dn/bvskCH/btrReJy8dw3/vTZDQTkTz1EQqZRvqrmIQ0/img_640x640.jpg"
                }
            }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// DELETE 댓글삭제
router.delete("/comment/:commentId", (req, res, next) => {
    console.log(req.params);
    //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
    try {
        return res.json({
            "msg": "삭제 성공",
            "success": true,
            "detail": {
                "commentId": 39
            }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// PATCH 댓글수정
router.patch("/comment/:commentId", (req, res, next) => {
    console.log(req.params);
    //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
    try {
        return res.json({
            "msg": "댓글 수정 성공",
            "success": true,
            "detail": {
                "commentId": 39,
                "comment": req.body.comment,
            }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// GET 마이페이지 메인
router.get("/user/videos", (req, res, next) => {
    console.log(req.params);
    //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
    try {
        return res.json({
            "msg": "공유한 영상정보 조회 성공",
            "success": true,
            "detail": [
                {
                    "id": 16,
                    "url": "GKLQy8UrVlM"
                },
                {
                    "id": 17,
                    "url": "ib3sKFtdJpQ&t"
                },
                {
                    "id": 18,
                    "url": "AYvsU_33CTQ"
                },
                {
                    "id": 24,
                    "url": "8o6TwNHI0BQ&t"
                },
                {
                    "id": 25,
                    "url": "4k7_AXs7H8k"
                },
                {
                    "id": 26,
                    "url": "Vd8RHN6h9-4"
                }
            ]
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
