<template>
    <div class="container border-top d-lg-block ">
        <div class="col-12 head-table mt-5 mb-5">
            <h3>جدول بازی های لیگ برتر</h3>
        </div>
        <div class="col-12 d-flex justify-content-start">
            <table class="table table-sm table-borderless ">
                <tbody>

                    <tr v-for="item in TableGame" :key="item">
                        <td>
                            <div class="logo-team">
                                <img :src="item.logoOne" alt="">
                            </div>
                            
                        </td>
                        <td>
                            <p>{{item.teamTwo}}</p>
                        </td>
                        <td>-</td>
                        <td class="tdClass pl-3">
                            <p>{{item.teamOne}}</p>
                        </td>
                        <td>
                            <div class="logo-team ">
                                <img :src="item.logoTwo" alt="">
                            </div>
                        </td>
                        <td>{{ item.date}}</td>
                        <td>{{ item.time}}</td>
                        <td class="tdpointer"> {{item.reserve}} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
const tableGame = [
                {
                    logoOne:"../../../src/assets/Img/images/pey.jpg" ,
                    teamOne : "پیکان" ,  
                    teamTwo : "پدیده خراسان",
                    logoTwo : "../../../src/assets/Img/images/padide.png" , 
                    date : "1396/05/06" , 
                    time : "16:00" , 
                    reserve : "ظرفیت تکمیل" 
                },
                {
                    logoOne:"../../../src/assets/Img/images/sanat.png" ,
                    teamOne : "صنعت نفت آبادان" ,  
                    teamTwo : "استقلال تهران",
                    logoTwo : "../../../src/assets/Img/images/esteq.png" , 
                    date : "1396/05/07" , 
                    time : "17:00" , 
                    reserve : "دریافت بلیت بازی" 
                },
                {
                    logoOne:"../../../src/assets/Img/images/siah.png" ,
                    teamOne : "سیاه جامگان" ,  
                    teamTwo : "ذوب آهن اصفهان",
                    logoTwo : "../../../src/assets/Img/images/siah.png" , 
                    date : "1396/05/08" , 
                    time : "18:00" , 
                    reserve : "دریافت بلیت بازی" 
                },
                {
                    logoOne:"../../../src/assets/Img/images/estjonob.jpg" ,
                    teamOne : "استقلال اهواز" ,  
                    teamTwo : "تراکتور سازی تبریز",
                    logoTwo : "../../../src/assets/Img/images/teraktor.jpg" , 
                    date : "1396/05/09" , 
                    time : "19:00" , 
                    reserve : "ظرفیت تکمیل" 
                },
            ]



export default {
    data () {
        return {
            TableGame : tableGame,
        }
    },
}
</script>


<style>
.tdClass {
    text-align: left;
}
.tdpointer {
    cursor: pointer;
}
</style>