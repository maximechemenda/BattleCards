const mongoose = require('mongoose');

const battleCardsSchema = new mongoose.Schema({
    id: String,
    caseStudies: {
        caseStudiesBattleCards: [{
            cards: [{
                cardId: String,
                text: String,
                cardType: String,
                editing: Boolean,
                height: String
            }],
            battleCardId: String,
            isEmptyAddButtonState: Boolean,
            titleValue: String,
            titleHeight: String,
            section: String,
            blueHeaderValues: [],
            redHeaderValues: []
        }], 
    },
    battleCards: {
        objectionsBattleCards: [{
            cards: [{
                cardId: String,
                text: String,
                cardType: String,
                editing: Boolean,
                height: String
            }],
            battleCardId: String,
            isEmptyAddButtonState: Boolean,
            titleValue: String,
            titleHeight: String,
            section: String,
            blueHeaderValues: [],
            redHeaderValues: []
        }],
        competitorsBattleCards: [{
            cards: [{
                cardId: String,
                text: String,
                cardType: String,
                editing: Boolean,
                height: String
            }],
            battleCardId: String,
            isEmptyAddButtonState: Boolean,
            titleValue: String,
            titleHeight: String,
            section: String,
            blueHeaderValues: [],
            redHeaderValues: []
        }],
        profilesBattleCards: [{
            cards: [{
                cardId: String,
                text: String,
                cardType: String,
                editing: Boolean,
                height: String
            }],
            battleCardId: String,
            isEmptyAddButtonState: Boolean,
            titleValue: String,
            section: String
        }],
        discoveriesBattleCards: [{
            cards: [{
                cardId: String,
                text: String,
                cardType: String,
                editing: Boolean,
                height: String
            }],
            battleCardId: String,
            isEmptyAddButtonState: Boolean,
            titleValue: String,
            section: String
        }],
        /* selectedBattleCards: [{
            cards: [{
                cardId: String,
                text: String,
                cardType: String,
                editing: Boolean,
                height: String
            }],
            battleCardId: String,
            isEmptyAddButtonState: Boolean,
            titleValue: String,
            section: String
        }], */
        //selectedBattleCards: [],
        isEmptyObjectionsState: Boolean,
        isEmptyCompetitorsState: Boolean,
        isEmptyProfilesState: Boolean,
        isEmptyDiscoveriesState: Boolean
    },
    isEmptyBattleCardsState: Boolean,
    isEmptyCaseStudiesState: Boolean
})

const BattleCards = mongoose.model('BattleCards', battleCardsSchema);

module.exports = { BattleCards };