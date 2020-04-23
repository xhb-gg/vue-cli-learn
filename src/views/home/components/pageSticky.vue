<template>
  <div>
    <article>
      <section>
        <h4>网曝王宝强殴打马蓉</h4>
        <content>
          <p>
            12月2日，有网友爆料称王宝强对马蓉施暴，状况严重，且马蓉目前已被送往某医院急诊。新浪娱乐第一时间赶往医院见到马蓉和其母亲，马蓉右边脸部以及眼睛周围有明显伤痕，嘴唇以及手掌也有淤血痕迹，其母额角红肿也较明显。据马蓉描述，王宝强和四五个同伴于今早一起对其拳打脚踢，踢打其头部、后脖、颈椎、掰扯其手部，撕扯嘴巴，甚至对马蓉妈妈施暴。
          </p>
        </content>
        <footer>网友评论：...</footer>
      </section>
      <section>
        <h4>知情人爆料称马蓉闯入王宝强家拿剪刀对峙</h4>
        <content>
          <p>
            12月2日，有网友爆料马蓉被王宝强施暴。经多方求证，搜狐娱乐从知情人士口中获悉，“目前网络上有关马蓉伤势的那些图，都是马蓉摆拍的。她跑到王宝强家闹事，还吓晕了王宝强妈妈，拿碎玻璃威胁警察，现场冲突很激烈。”
            知情人士了解，马蓉和王宝强发生冲突的起因是，马蓉跑到王宝强家闹事。她不仅拍照、翻东西，拿剪刀撕毁东西，辱骂王宝强表妹，还拿剪刀对峙，吓晕了王宝强母亲，王宝强无奈才报警的。目前王宝强妈妈已经送往北京某医院就诊。
            “王宝强在无奈之下报警，警察来了之后，双方对峙七八个小时，孩子在外面喊，马蓉还是不开门。后来王宝强把门撞开，门周围的玻璃碎了一地，马蓉还把玻璃捡起来威胁警察，说要划伤自己，然后拿手机说要现场直播。还出口辱骂王宝强表妹，说对方作孽做太多了，才导致妈妈去世，还骂对方死了上面死下面。”
            据悉，现场冲突很激烈，整整一夜。最后马蓉自己打了120，而120来了之后，她还躺在地上自己拍照，“目前网络上有关马蓉伤势的那些图，都是马蓉摆拍的。”
          </p>
        </content>
        <footer>网友评论：...</footer>
      </section>
      <section>
        <h4>马蓉妈妈回应事件经过：没有和王宝强妈妈发生正面冲突</h4>
        <content>
          <p>
            新浪娱乐独家从马蓉及其母亲处了解到，打人事件发生在今早六点左右。据了解，事发地是在王宝强家，但该房产权仍在马蓉名下。此前，知情人士透露马蓉带着剪刀去了王宝强家，直接吓晕了宝强妈妈。对此，马蓉母亲称他们只是去接孩子的，不存在持凶器前往一说，他们和王母也没有发生过正面冲突。今日另有一张马蓉躺在卧室地上刷手机的图片爆出，有网友据此质疑马蓉摆拍、做戏。而马蓉妈妈则称，当时女儿被打在地上已几近不能动弹，自己在打就医电话不能及时出车，且不擅使用电子产品情况下，将手机交由女儿联系医院而已。
          </p>
        </content>
        <footer>网友评论：...</footer>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'pageSticky'
}
</script>

<style lang="scss" scoped>
article {
  max-width: 600px;
  margin: 1em auto;
}
article h4,
article footer {
  position: -webkit-sticky; /* for Safari */
  position: sticky;
}
article h4 {
  margin: 2em 0 0;
  background-color: #333;
  color: #fff;
  padding: 10px;
  top: 0;
  z-index: 1;
}
article content {
  display: block;
  background-color: #ffffe0;
  position: relative;
  padding: 1px 10px;
}
article footer {
  background-color: #f0f3f9;
  padding: 10px;
  bottom: 50vh;
  z-index: -1;
}
</style>
