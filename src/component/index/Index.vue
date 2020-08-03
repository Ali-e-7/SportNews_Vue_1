<template>
    <div>
        <ticket-about></ticket-about>
        <live-game></live-game>
        <best-game></best-game>
        <date-game></date-game>
        <special-game></special-game>
        <news-game></news-game>
        <comments-user></comments-user>
        <sponser-web></sponser-web>
        <subscribe-web></subscribe-web>
    </div>
</template>


<script>

import Ticket from './indexItems/Ticket.vue'
import LiveGame from './indexItems/LiveGame.vue'
import BestGame from './indexItems/BestGame.vue'
import DateGame from './indexItems/DateGame.vue'
import SpecialGame from './indexItems/SpecialGame.vue'
import NewsGame from './indexItems/NewsGame.vue'
import CommentsUser from './indexItems/CommentsUser.vue'
import SponserWeb from './indexItems/SponserWeb.vue'
import SubscribeWeb from './indexItems/SubscribeWeb.vue'


export default {
    components : {
        ticketAbout :  Ticket,
        liveGame : LiveGame,
        bestGame : BestGame,
        dateGame : DateGame,
        specialGame : SpecialGame,
        newsGame : NewsGame,
        commentsUser : CommentsUser,
        sponserWeb : SponserWeb,
        SubscribeWeb : SubscribeWeb 
    }
}
</script>