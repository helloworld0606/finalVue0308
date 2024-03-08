<template>
    <h2>票價產品介紹</h2>
<div class="container">
    <div class="header">
        <p>頭等艙</p>
    </div>
    <div class="rules" >      
        <div v-for="rule in cabinrule" :key="rule.id">              
                    <p>艙等:{{rule.cabinCode}}</p>
                    <p>可託運行李件數:{{rule.carryBagCount}}</p>
                    <p>託運行李重量限制/一件:{{rule.carryBagWeight}}kg</p>
                    <p>NoShow費用:{{rule.noShowFee}}</p>
                    <p>退票費用:{{rule.refundFee}}</p>
         </div>
    </div>
</div>

</template>

<script setup>
import {ref, reactive} from'vue'

const cabinrule=ref([])

const loadCabinRule = async ()=>
{
    const response = await fetch('https://localhost:7295/api/AirCabinRules')
const data = await response.json();
//console.log(data);
cabinrule.value=data;
console.log(cabinrule.value);
}

loadCabinRule();
</script>

<style>
.header {
background-color: #803605; /* 底色米黃 */
border-radius: 10px 10px 0 0 ; /* 圓角 */
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 輕微陰影 */
padding: 20px;
color: white; /* 白色文本 */

}

.rules {
background-color: #ffecb3; /* 底色米黃 */
border-radius:  0 0 10px 10px; /* 圓角 */
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 輕微陰影 */
padding: 20px;
color: black; /* 白色文本 */

}
</style>