<template>
        <h2>票價產品介紹</h2>
     

       <table class="table table-bordered">
                 <thead>
                        <tr>
                                <th>頭等艙</th>
                                <th>商務艙</th>
                                <th>豪華經濟艙</th>
                                <th>經濟艙</th>
                        </tr>
                </thead>
                <tbody>
                        <tr v-for="rule in cabinrule":key="rule.id">
                        <td>艙等:{{rule.cabinCode}}</td>
                        <td>可託運行李件數:{{rule.carryBagCount}}</td>
                        <td>託運行李重量限制/一件:{{rule.carryBagWeight}}kg</td>
                        <td>NoShow費用:{{rule.noShowFee}}</td>
                        <td>退票費用:{{rule.refundFee}}</td>
                        </tr>
                </tbody>
        </table>
</template>
    
<script setup>
import {ref} from'vue'

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
    .rules {
  background-color: #ffecb3; /* 底色米黃 */
  border-radius: 10px; /* 圓角 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 輕微陰影 */
  padding: 20px;
}
</style>