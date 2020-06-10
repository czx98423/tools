<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal"
              theme="dark"
              active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Item 1
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{height:'850px'}">
        <Sider hide-trigger
               :style="{background: '#ccc'}">
          <Menu theme="light"
                width="auto"
                :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <Card class='dxfUpload'>
              <Upload action="*"
                      :before-upload="handleUpload">
                <Button icon="ios-cloud-upload-outline">Upload files</Button>
              </Upload>
            </Card>
            <Card>
              <div class="main"
                   :style="{height:'600px'}"></div>
              
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import '../../common/dxf';
import '../../common/twaver'
import '../../common/twaver-make'
import '../../common/sceneEditor';
import '../../common/twaver-doodle';
import '../../common/util';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleUpload (e) {
      var files = $('.dxfUpload input')[0], self = this;
      if (files.files && files.files.length > 0) {
        var file = files.files[0];
        if (file.name.indexOf(".") > 0) {
          var fi = file.name.split(".");
          if (fi[1] != 'dxf') {
            alert('file format should be ' + ext);
            return;
          }
          var reader = new FileReader();
          reader.readAsText(file);
          reader.onloadend = function () {
            if (reader.error) {
              console.log(reader.error);
            } else {
              sceneEditor.loadDxfFile(reader.result, self.modelFilter, false)
            }
          }
        }
      }
    },
    modelFilter (objs) {
      for (var i = 0; i < objs.length; i++) {
        var obj = objs[i];
        if (!make.Default.getCreator(obj.id)) {
          make.Default.registerModel({
             "id": obj.id, "modelType": obj.modelType, "width": obj.width||0, "depth": obj.depth||0, "height": obj.height ||0
          });
        }
        if (make.Default.getType(obj.id) == 'channel') {
          obj.client = obj.client || {};
          obj.client.isPhysicalPosition = true;
        }
      }
      return objs;
    },
    add () {
      this.msg += 's'
    }
  },
  computed: {
    msg2: function (e) {
      console.log(e)
      return this.msg + '111'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
