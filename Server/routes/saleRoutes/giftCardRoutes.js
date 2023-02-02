const express = require("express");
const router = express.Router();
const {
    createGiftCard,
    getAllGiftCard,
    getGiftCardDetail,
    updateGiftCard,
    deleteOneGiftCard,
    deleteMultipleGiftCards,
} = require("../../controller/salesController/giftCardController");


router.route("/giftCard").post(createGiftCard);
router.route("/giftCard/getAllGiftCard").get(getAllGiftCard);

router.route("/giftCard/:id").get(getGiftCardDetail);
router.route("/giftCard/:id").put(updateGiftCard);
router.route("/giftCard/:id").delete(deleteOneGiftCard);
router
    .route("/giftCard/deleteMultipleGiftCards")
    .delete(deleteMultipleGiftCards);

module.exports = router;