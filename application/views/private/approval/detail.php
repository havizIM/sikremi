<header class="page-header">
    <h2>Detail Approval</h2>

    <div class="right-wrapper pull-right" style="margin-right: 15px;">
        <ol class="breadcrumbs">
            <li>
                <a href="#/dashboard">
                    <i class="fa fa-home"></i>
                </a>
            </li>
            <li>
                <a href="#/approval">
                    <span>Approval</span>
                </a>
            </li>
            <li><span><?= $id ?></span></li>
        </ol>
    </div>
</header>

<section class="detail-container">
    <h1 class="text-center">Loading...</h1>
</section>


<script>
    $(function(){
        appController.detailApproval(<?= json_encode($this->session->userdata()) ?>, '<?= $id ?>')
    })
</script>