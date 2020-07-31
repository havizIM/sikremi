<header class="page-header">
    <h2>Detail Aplikasi</h2>

    <div class="right-wrapper pull-right" style="margin-right: 15px;">
        <ol class="breadcrumbs">
            <li>
                <a href="#/dashboard">
                    <i class="fa fa-home"></i>
                </a>
            </li>
            <li>
                <a href="#/aplikasi">
                    <span>Aplikasi</span>
                </a>
            </li>
            <li><span><?= $id ?></span></li>
        </ol>
    </div>
</header>

<section class="detail-container">
    <h1 class="text-center">Loading...</h1>
</section>

<form id="form_verifikasi">
    <div class="modal fade" id="modal_verifikasi" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">Verifikasi Aplikasi</h4>
                </div>
                <div class="modal-body" id="verifikasi_container">
                    <h4 class="text-center">Loading...</h4>
                </div>
                <div class="modal-footer">
                    <button type="button" data-dismiss="modal" class="btn btn-danger">Batal</button>
                    <button type="submit" id="btn_terima" class="btn btn-success">Terima</button>
                </div>
            </div>
        </div>
    </div>
</form>

<form id="form_survey">
    <div class="modal fade" id="modal_survey" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">Survey Aplikasi</h4>
                </div>
                <div class="modal-body" id="survey_container">
                    <h4 class="text-center">Loading...</h4>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Batal</button>
                    <button type="submit" id="btn_terima" class="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
</form>

<form id="form_approval">
    <div class="modal fade" id="modal_approval" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">Approval Aplikasi</h4>
                </div>
                <div class="modal-body" id="approval_container">
                    <h4 class="text-center">Loading...</h4>
                </div>
                <div class="modal-footer">
                    <button type="button"  data-dismiss="modal" class="btn btn-danger">Batal</button>
                    <button type="submit" id="btn_terima" class="btn btn-success">Terima</button>
                </div>
            </div>
        </div>
    </div>
</form>

<form id="form_tolak">
    <div class="modal fade" id="modal_tolak" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">Tolak Aplikasi</h4>
                </div>
                <div class="modal-body" id="approval_container">
                    <input type="hidden" id="aplikasi_id" name="aplikasi_id">
                    <div class="form-group">
                        <label for="">Berikan Keterangan</label>
                        <textarea name="keterangan" id="keterangan" cols="30" rows="10" class="form-control"></textarea>
                    </div>

                    <br>
                    <h4>Anda yakin ingin menolak Aplikasi yang telah diajukan ini ?</h4>
                </div>
                <div class="modal-footer">
                    <button type="button"  data-dismiss="modal" class="btn btn-danger">Tidak</button>
                    <button type="submit" id="btn_terima" class="btn btn-success">Ya</button>
                </div>
            </div>
        </div>
    </div>
</form>


<script>
    $(function(){
        appController.detail(<?= json_encode($this->session->userdata()) ?>, '<?= $id ?>')
    })
</script>