<header class="page-header">
    <h2>Dashboard</h2>
</header>

<div class="row">
    <div class="col-md-12 col-lg-12 col-xl-12">
        <section class="panel panel-horizontal">
            <header class="panel-heading bg-primary">
                <div class="panel-heading-icon">
                    <i class="fa fa-user"></i>
                </div>
            </header>
            <div class="panel-body p-lg">
                <h3 class="text-weight-semibold mt-sm">Selamat Datang</h3>
                <p>Anda telah memasuki halaman Administrator sebagai <b>Analyst</b>.</p>
            </div>
        </section>
    </div>
</div>

<div class="row">
    <div class="col-md-8">
        <section class="panel panel-featured-left panel-featured-primary">
            <div class="panel-body">
                <h4>Perfomance</h4>
                <canvas id="performanceChart" height="200"></canvas>
            </div>
        </section>
    </div>
    <div class="col-md-4">
        <section class="panel panel-featured-left panel-featured-primary">
            <div class="panel-body">
                <div class="widget-summary">
                    <div class="widget-summary-col widget-summary-col-icon">
                        <div class="summary-icon bg-primary">
                            <i class="fa fa-file"></i>
                        </div>
                    </div>
                    <div class="widget-summary-col">
                        <div class="summary">
                            <h4 class="title">Total Aplikasi</h4>
                            <div class="info">
                                <h4><strong class="count_aplikasi">0</strong></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="col-md-4">
        <section class="panel panel-featured-left panel-featured-danger">
            <div class="panel-body">
                <h4>Progress</h4>
                <canvas id="progressChart" height="250"></canvas>
            </div>
        </section>
    </div>
</div>

<script>
    appController.dashboard(<?= json_encode($this->session->userdata()) ?>)
</script>