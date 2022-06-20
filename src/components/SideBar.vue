<template>
    <div id="app"></div>
    <div id="sidebar" class="active">
        <div class="sidebar-wrapper active">
            <div class="sidebar-header position-relative">
                <div class="d-flex justify-content-between">
                    <div class="logo">
                        <a href="index.html"><img src="template/assets/images/logo/logo.svg" alt="Logo" srcset=""></a>
                    </div>
                </div>
            </div>
            <div class="sidebar-menu">
                <ul class="menu">
                    <li class="sidebar-title">Pacientes</li>

                    <li class="sidebar-item has-sub" v-for="folder in pacientes" :key="folder">
                        <a href="#" class='sidebar-link'>
                            <i class="bi bi-file-earmark-medical-fill"></i>
                            <span @click="toggle(folder.name)"> {{ folder.name }}</span>
                        </a>
                        <ul class="submenu" v-show="false" :id="folder.name">
                            <li class="submenu-item" v-for="page in folder.pages" :key="page"
                                style="margin-left: 20px;">
                                <a>{{ page.name }}</a>
                            </li>
                        </ul>
                    </li>

                    <li class="sidebar-title "> Financeiro </li>

                    <li class="sidebar-item has-sub" v-for="folder in financeiro" :key="folder">
                        <a href="#" class='sidebar-link'>
                            <i class="bi bi-collection-fill"></i>
                            <span @click="toggle(folder.name)"> {{ folder.name }}</span>
                        </a>
                        <ul class="submenu" v-show="false" :id="folder.name">
                            <li class="submenu-item" v-for="page in folder.pages" :key="page"
                                style="margin-left: 20px;">
                                <a>{{ page.name }}</a>
                            </li>
                        </ul>
                    </li>

                    <li class="sidebar-title "> Relatórios </li>

                    <li class="sidebar-item has-sub" v-for="folder in relatorios" :key="folder">
                        <a href="#" class='sidebar-link'>
                            <i class="bi bi-collection-fill"></i>
                            <span @click="toggle(folder.name)"> {{ folder.name }}</span>
                        </a>
                        <ul class="submenu" v-show="false" :id="folder.name">
                            <li class="submenu-item" v-for="page in folder.pages" :key="page"
                                style="margin-left: 20px;">
                                <a>{{ page.name }}</a>
                            </li>
                        </ul>
                    </li>

                    <li class="sidebar-title "> Controle de estoque </li>

                    <li class="sidebar-item has-sub" v-for="folder in estoque" :key="folder">
                        <a href="#" class='sidebar-link'>
                            <i class="bi bi-collection-fill"></i>
                            <span @click="toggle(folder.name)"> {{ folder.name }}</span>
                        </a>
                        <ul class="submenu" v-show="false" :id="folder.name">
                            <li class="submenu-item" v-for="page in folder.pages" :key="page"
                                style="margin-left: 20px;">
                                <a>{{ page.name }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            pacientes: [
                { name: 'Gerenciar pacientes', pages: [{ name: 'Adicionar' }, { name: 'Editar' }, { name: 'Financeiro' }] },
            ],
            financeiro: [
                { name: 'Vendas e faturamentos', pages: [{ name: 'Novo Orçamento' }, { name: 'Nova fatura' }, { name: 'Editar fatura na lista de fatura/Orçamentos' }] },
                { name: 'Lançamentos', pages: [{ name: 'Novo Orçamento' }, { name: 'Nova fatura' }, { name: 'Editar fatura na lista de fatura/Orçamentos' }] },
                { name: 'Dashboard', pages: [{ name: 'Novo Orçamento' }, { name: 'Nova fatura' }, { name: 'Editar fatura na lista de fatura/Orçamentos' }] },
            ],
            relatorios: [
                { name: 'Filtros', pages: [{ name: 'TIpo de relatório' }, { name: 'Colaborador/Usuário' }, { name: 'Unidade/Filial' }, { name: 'Tabela/Convênio' }, { name: 'Paciente' }] },
                { name: 'Tipos de relatório', pages: [{ name: 'Novo Orçamento' }, { name: 'Nova fatura' }, { name: 'Editar fatura na lista de fatura/Orçamentos' }] },
                { name: 'Exportar dados', pages: [{ name: 'Novo Orçamento' }, { name: 'Nova fatura' }, { name: 'Editar fatura na lista de fatura/Orçamentos' }] },
            ],
            estoque: [
                { name: 'Gerenciar estoque', pages: [{ name: 'Novo Item' }, { name: 'Registrar entradas' }, { name: 'Registrar saídas' }, {name: 'Listagem de itens'}] },
            ]
        }
    },
    methods: {
        toggle: function (idname) {
            if (document.getElementById(idname).style.display == "none") {
                document.getElementById(idname).style.display = "inline";
            } else {
                document.getElementById(idname).style.display = "none";
            }
        },
    },
    mounted() {
        let dashboard = document.createElement('script');
        dashboard.setAttribute('src', 'template/assets/js/app.js')
        dashboard.async = true;
        return document.head.appendChild(dashboard)
    }
}
</script>

<style>
</style>