const mongoose = require('mongoose');

const battleCardsSchema = new mongoose.Schema({
    id: String,
    objectionsBattleCards: [{
        cards: [{
            cardId: String,
            text: String,
            cardType: String,
            editing: Boolean
        }],
        battleCardId: String,
        isEmptyAddButtonState: Boolean,
        titleValue: String,
        section: String,
        blueHeaderValues: [{
            headerId: String,
            headerValue: String
        }],
        redHeaderValues: [{
            headerId: String,
            headerValue: String
        }]
    }],
    competitorsBattleCards: [{
        cards: [{
            cardId: String,
            text: String,
            cardType: String,
            editing: Boolean
        }],
        battleCardId: String,
        isEmptyAddButtonState: Boolean,
        titleValue: String,
        section: String,
        blueHeaderValues: [{
            headerId: String,
            headerValue: String
        }],
        redHeaderValues: [{
            headerId: String,
            headerValue: String
        }]
}],
    profilesBattleCards: [{
        cards: [{
            cardId: String,
            text: String,
            cardType: String,
            editing: Boolean
        }],
        battleCardId: String,
        isEmptyAddButtonState: Boolean,
        titleValue: String,
        section: String,
        blueHeaderValues: [{
            headerId: String,
            headerValue: String
        }],
        redHeaderValues: [{
            headerId: String,
            headerValue: String
        }]
    }],
    discoveriesBattleCards: [{
        cards: [{
            cardId: String,
            text: String,
            cardType: String,
            editing: Boolean
        }],
        battleCardId: String,
        isEmptyAddButtonState: Boolean,
        titleValue: String,
        section: String,
        blueHeaderValues: [{
            headerId: String,
            headerValue: String
        }],
        redHeaderValues: [{
            headerId: String,
            headerValue: String
        }]
    }],
    selectedBattleCards: [{
        cards: [{
            cardId: String,
            text: String,
            cardType: String,
            editing: Boolean
        }],
        battleCardId: String,
        isEmptyAddButtonState: Boolean,
        titleValue: String,
        section: String,
        blueHeaderValues: [{
            headerId: String,
            headerValue: String
        }],
        redHeaderValues: [{
            headerId: String,
            headerValue: String
        }]
    }],
    isEmptyObjectionsState: Boolean,
    isEmptyCompetitorsState: Boolean,
    isEmptyProfilesState: Boolean,
    isEmptyDiscoveriesState: Boolean

})

const BattleCards = mongoose.model('BattleCards', battleCardsSchema);

module.exports = { BattleCards };