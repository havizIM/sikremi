<section class="page-header page-header-modern page-header-background page-header-background-sm overlay overlay-color-primary overlay-show overlay-op-8 mb-5" style="background-image: url(img/page-header/page-header-elements.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-md-12 align-self-center p-static order-2 text-center">
                <h1>CEK PENGAJUAN</h1>

            </div>
            <div class="col-md-12 align-self-center order-1">
                <ul class="breadcrumb breadcrumb-light d-block text-center">
                    <li><a href="#/home">Beranda</a></li>
                    <li class="active">Cek Pengajuan</li>
                </ul>
            </div>
        </div>
    </div>
</section>



<div class="container py-2">

    <div class="row">
        <div class="col-md-12">
            <div class="overflow-hidden mb-1">
                <h2 class="font-weight-normal text-7 mb-0"><strong class="font-weight-extra-bold">Cek Pengajuan</strong></h2>
            </div>
            <div class="overflow-hidden mb-4 pb-3">
                <p class="mb-0">Isi dengan email dan nomor pengajuan anda untuk dapat melihat progress dari aplikasi anda.</p>
            </div>

            <div class="row">
                <div class="col-lg-12 order-1 order-lg-2" id="form_simulasi">
                    <div class="featured-box featured-box-primary text-left mt-0">
                        <div class="box-content">
                            <h4 class="color-primary font-weight-semibold text-4 text-uppercase mb-3">Form Pencarian</h4>
                            <form id="form_cek">
                                <div class="form-row">
                                    <div class="form-group col-lg-6">
                                        <label class="font-weight-bold text-dark text-2">No Aplikasi</label>
                                        <input type="text" id="no_aplikasi" name="no_aplikasi" class="form-control form-control-lg" required="">
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label class="font-weight-bold text-dark text-2">Email</label>
                                        <input type="email" id="email" name="email" class="form-control form-control-lg" required="">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-lg-9">
                                        
                                    </div>
                                    <div class="form-group col-lg-3">
                                        <button type="submit" id="btn_submit" class="btn btn-primary btn-modern float-right" data-loading-text="Loading...">Cek <i class="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 order-1 order-lg-2" id="results_container"></div>
            </div>
        </div>
    </div>
</div>

<script type="module">
    import pengajuanController from '<?= base_url() ?>src/public/modules/pengajuan.js';
    pengajuanController.cek()
</script>