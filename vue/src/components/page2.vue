<template>
  <div>
    <a-button type="primary" @click="showModal">
      Open Modal
    </a-button>
    <a-modal
      :width="650"
      :height="450"
      v-model="visible"
      title="Basic Modal"
      @ok="handleOk"
    >
      <div
        style="display: inline-block;width: 50%;height:250px;overflow-y:auto;bordrer:solid 1px #ccc"
      >
        <a-tree :tree-data="gData" @select="nodeOnSelect"> </a-tree>
      </div>
      <div
        style="display: inline-block;width: 50%;float:right;bordrer:solid 1px #ccc"
      >
        <a-form
          :form="form"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 12 }"
          @submit="handleSubmit"
        >
          <a-form-item label="Note">
            <a-input
              v-decorator="[
                'note',
                {
                  rules: [
                    { required: true, message: 'Please input your note!' },
                  ],
                },
              ]"
            />
          </a-form-item>
          <a-form-item label="Gender" v-if="!isRoot">
            <a-select
              v-decorator="[
                'gender',
                {
                  rules: [
                    { required: true, message: 'Please select your gender!' },
                  ],
                },
              ]"
              placeholder="Select a option and change input text above"
              @change="handleSelectChange"
            >
              <a-select-option v-for="d in selectdata" :key="d.id">
                {{ d.id }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" html-type="submit">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script>
const x = 3
const y = 2
const z = 1
const gData = []

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0'
  const tns = _tns || gData

  const children = []
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`
    tns.push({ title: key, key })
    if (i < y) {
      children.push(key)
    }
  }
  if (_level < 0) {
    return tns
  }
  const level = _level - 1
  children.forEach((key, index) => {
    tns[index].children = []
    return generateData(level, key, tns[index].children)
  })
}
generateData(z)

const dataList = []
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i]
    const key = node.key
    dataList.push({ key, title: key })
    if (node.children) {
      generateList(node.children)
    }
  }
}
generateList(gData)

const getParentKey = (key, tree) => {
  let parentKey
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children)
      }
    }
  }
  return parentKey
}
export default {
  data() {
    return {
      selectdata:[
        {id:"a1"},
         {id:"a2"}
      ],
      isRoot: true,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      gData,
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e)
      this.visible = false
    },
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    handleSelectChange(value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      })
    },
    nodeOnSelect(e) {
      console.log(arguments)
      if (e[0] == '0-0') {
        this.isRoot = true
      } else {
        this.isRoot = false
      }
      this.form.setFieldsValue({
        note: e[0],
      })
    },
    onChange(e) {
      const value = e.target.value
      const expandedKeys = dataList
        .map((item) => {
          if (item.title.indexOf(value) > -1) {
            return getParentKey(item.key, gData)
          }
          return null
        })
        .filter((item, i, self) => item && self.indexOf(item) === i)
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true,
      })
    },
    handleSubmit(e) {
      e.preventDefault();  
      console.log(e)
    },
  },
}
</script>
