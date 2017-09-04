<template>
    <div>
        <b-card header="Normal Form">
            <b-form-fieldset label="Email" description="Please enter your email.">
                <b-form-input type="email" placeholder="Enter Email.."></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset label="Password" description="Please enter your password.">
                <b-form-input type="email" placeholder="Enter Password.."></b-form-input>
            </b-form-fieldset>
            <div slot="footer">
                <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
                <b-button variant="primary">Primary</b-button>
            </div>
        </b-card>
        <b-card header="Switch with text">
            <c-switch type="text" variant="primary" on="On" off="Off" :checked="true"/>

            <c-switch type="text" variant="secondary" on="On" off="Off" :checked="true"/>

            <c-switch type="text" variant="success" on="On" off="Off" :checked="true"/>

            <c-switch type="text" variant="warning" on="On" off="Off" :checked="true"/>

            <c-switch type="text" variant="info" on="On" off="Off" :checked="true"/>

            <c-switch type="text" variant="danger" on="On" off="Off" :checked="true"/>

            <c-switch type="icon" variant="primary" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true"
                      :checked="true"/>
            &nbsp;&nbsp;&nbsp;
            <c-switch type="icon" variant="secondary" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true"
                      :checked="true"/>
            &nbsp;&nbsp;&nbsp;
            <c-switch type="icon" variant="success" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true"
                      :checked="true"/>
            &nbsp;&nbsp;&nbsp;
            <c-switch type="icon" variant="warning" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true"
                      :checked="true"/>
            &nbsp;&nbsp;&nbsp;
            <c-switch type="icon" variant="info" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
            &nbsp;&nbsp;&nbsp;
            <c-switch type="icon" variant="danger" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        </b-card>
        <b-card header="Bordered Table">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in list">
                    <td>{{item.username}}</td>
                    <td>{{item.dateRegistered}}</td>
                    <td>{{item.role}}</td>
                    <td>
                        <span class="badge badge-success">Active</span>
                    </td>
                </tr>
                </tbody>
            </table>
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </b-card>
    </div>
</template>

<script>
	import cSwitch from '@/components/Switch'

	export default {
		name: 'dashboard',
		data() {
			return {
				list:[]
            }
        },
		components: {
			cSwitch
		},
		mounted() {
			var _this = this;
			this.$nextTick(() => {
				_this.$http.get('static/data/data.json').then((res) => {
					if(res.body.result && res.body.result.success) {
						_this.list = res.body.data;
                    } else {
						console.error(res.body.result.info);
                    }
				});
			})
		}
	}
</script>
