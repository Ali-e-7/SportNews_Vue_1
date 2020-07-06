<template>
    <div>
        <ticket-about></ticket-about>
        <live-game></live-game>
        <best-game></best-game>
        <data-game></data-game>
        <special-game></special-game>
        <news-game></news-game>
        <comments-user></comments-user>
        <sponser-web></sponser-web>
        <subscribe-web></subscribe-web>
    </div>
</template>


<script>

import Ticket from '../component/Ticket.vue'
import LiveGame from '../component/LiveGame'
import BestGame from '../component/BestGame'
import DateGame from '../component/DateGame'
import SpecialGame from '../component/SpecialGame.vue'
import NewsGame from '../component/NewsGame.vue'
import CommentsUser from '../component/CommentsUser.vue'
import SponserWeb from '../component/SponserWeb.vue'
import SubscribeWeb from '../component/SubscribeWeb.vue'


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