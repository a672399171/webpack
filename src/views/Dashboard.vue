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
                <tr>
                    <td>Pompeius René</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
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
        components: {
            cSwitch
        }
    }
</script>
