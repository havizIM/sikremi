const pengajuanUI = ((SET) => {

    return{
        renderResults: data => {
            let status_color;

            if (data.status === 'Proses') {
                status_color = '<div class="text-warning"><b>Proses</b></div>'
            } else if (data.status === 'Tolak') {
                status_color = '<div class="text-danger"><b>Ditolak</b></div>'
            } else {
                status_color = '<div class="text-success"><b>Diterima</b></div>'
            }

            let html = `
                <div class="featured-box featured-box-primary text-left mt-0">
                    <div class="box-content">
                        <h4 class="color-primary font-weight-semibold text-4 text-uppercase mb-3">Hasil Pengecekan</h4>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="tabs">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#detail" data-toggle="tab">Aplikasi</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#foto" data-toggle="tab">Lampiran</a>
                                        </li>

                                        ${data.verifikasi !== null ? `
                                            <li class="nav-item">
                                                <a class="nav-link" href="#history" data-toggle="tab">History</a>
                                            </li>
                                        ` : ''}
                                    </ul>
                                    <div class="tab-content">
                                        <div id="detail" class="tab-pane active">

                                            <div class="invoice printableArea">

                                                <div class="bill-info">

                                                    <table style="width: 100%">
                                                        <tr>
                                                            <td style="width: 70%">
                                                                <div class="ib">
                                                                    <img src="${SET.baseURL()}assets/private/images/logo.png" class="img-fluid" style="width: 50%" alt="Mandiri">
                                                                    <p class="mt-5">Jl. Jenderal Gatot Subroto Kav. 36-38<br> Jakarta 12190 Indonesia<br> Telp: 14000, +62-21-52997777<br> Fax: +62-21-52997735<br> Email: mandiricare@bankmandiri.co.id<br> SWIFT Code: BMRIIDJA</p>
                                                                </div>
                                                            </td>
                                                            <td style="width: 30%">
                                                                <table style="width: 100%">
                                                                    <tr>
                                                                        <td colspan="3">
                                                                            <h3>Aplikasi Kredit Mikro</h3>
                                                                            <h4><b>No. ${data.no_aplikasi}</b></h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Angunan</td>
                                                                        <td>:</td>
                                                                        <td>${data.angunan}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Limit</td>
                                                                        <td>:</td>
                                                                        <td>Rp. ${SET.realCurrency(data.limit_kredit)}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Jangka Waktu</td>
                                                                        <td>:</td>
                                                                        <td>${data.jangka_waktu} Bulan</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Tgl Pengajuan</td>
                                                                        <td>:</td>
                                                                        <td>${data.tgl_aplikasi}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Status</td>
                                                                        <td>:</td>
                                                                        <td>${status_color}</td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <hr/>

                                                    <h3>Pemohon</h3>
                                                    <table style="width: 100%">
                                                        <tr>
                                                            <td style="width: 30%">Nama Lengkap</td>
                                                            <td style="width: 5%">:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.nama_lengkap}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tempat / Tgl Lahir</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.tempat_lahir}, ${data.pemohon.tgl_lahir}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Alamat</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.alamat}, ${data.pemohon.kecamatan}, ${data.pemohon.kota}, ${data.pemohon.provinsi}, ${data.pemohon.kode_pos}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lama Tinggal</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.lama_tinggal}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Status Tempat Tinggal</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.status_tempat_tinggal}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pendidikan Terakhir</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.pendidikan_terakhir}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Status</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.status}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jumlah Tanggungan</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.jml_tanggungan}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Telepon</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.telepon}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>No KTP</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.no_ktp}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>No KK</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.no_kk}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>NPWP</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pemohon.no_npwp}</td>
                                                        </tr>
                                                    </table>

                                                    <hr/>

                                                    
                                                    <h3>Pasangan</h3>
                                                    <table style="width: 100%">
                                                        <tr>
                                                            <td style="width: 30%">Nama Lengkap</td>
                                                            <td style="width: 5%">:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.pasangan.nama_lengkap)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tempat / Tgl Lahir</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.pasangan.tempat_lahir)}, ${SET.replaceNull(data.pasangan.tgl_lahir)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pendidikan Terakhir</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.pasangan.pendidikan_terakhir)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pekerjaan</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.pasangan.pekerjaan)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Penghasilan</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.pasangan.penghasilan === null ? '-' : `Rp. ${SET.realCurrency(data.pasangan.penghasilan)}`}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>No KTP</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.pasangan.no_ktp)}</td>
                                                        </tr>
                                                    </table>

                                                    <hr/>

                                                    <h3>Kerabat</h3>
                                                    <table style="width: 100%">
                                                        <tr>
                                                            <td style="width: 30%">Nama Lengkap</td>
                                                            <td style="width: 5%">:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.kerabat.nama_lengkap)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hubungan</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.kerabat.hubungan)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Alamat</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.kerabat.alamat)}, ${data.kerabat.kota}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jenis Kelamin</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.kerabat.jenis_kelamin === 'P' ? 'Perempuan' : 'Laki-laki'}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Telepon</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.kerabat.telepon)}</td>
                                                        </tr>
                                                    </table>

                                                    <hr/>

                                                    <h3>Usaha</h3>
                                                    <table style="width: 100%">
                                                        <tr>
                                                            <td style="width: 30%">Berusaha Sejak</td>
                                                            <td style="width: 5%">:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.usaha.berusaha_sejak)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bidang Usaha</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.usaha.bidang_usaha)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jumlah Karyawan</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.usaha.jml_karyawan)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Status Kepemilikan</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${data.usaha.status_kepemilikan}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Telepon</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.replaceNull(data.usaha.telepon)}</td>
                                                        </tr>
                                                    </table>

                                                    <hr/>

                                                    <h3>Keuangan</h3>
                                                    <table style="width: 100%">
                                                        <tr>
                                                            <td style="width: 30%">Penghasilan Perbulan</td>
                                                            <td style="width: 5%">:</td>
                                                            <td style="border-bottom: 1px solid black">Rp. ${SET.realCurrency(data.keuangan.penghasilan_perbulan)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Penghasilan Lainnya</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">Rp. ${SET.realCurrency(data.keuangan.penghasilan_lainnya)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Keuntungan</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">Rp. ${SET.realCurrency(data.keuangan.keuntungan)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Biaya</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">Rp. ${SET.realCurrency(data.keuangan.biaya)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total Pinjaman Lain</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">Rp. ${SET.realCurrency(data.keuangan.total_pinjaman_lain)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sisa Waktu Angsuran</td>
                                                            <td>:</td>
                                                            <td style="border-bottom: 1px solid black">${SET.realCurrency(data.keuangan.sisa_waktu_angsuran)} Bulan</td>
                                                        </tr>
                                                    </table>
                                                    
                                                    <hr/>

                                                </div>

                                                <br/>

                                                <table style="width: 100%">
                                                    <tr>
                                                        <td style="width: 50%" class="text-center">
                                                            
                                                        </td>
                                                        <td  style="width: 50%" class="text-center">
                                                            ${data.keterangan !== null ? `
                                                                <div>Note :</div>
                                                                <div><b>
                                                                    ${data.keterangan}
                                                                </b></div>
                                                            ` : ''}
                                                        </td>
                                                    </tr>
                                                </table>


                                            </div>


                                        </div>

                                        <div id="foto" class="tab-pane">
                                            <div class="timeline timeline-simple mt-xlg mb-md">
                                                <div class="tm-body">
                                                    <ol class="tm-items">
                                                        ${data.lampiran.map(v => {
                                                            return `
                                                                <li style="margin-top: 10px;">
                                                                    <div class="tm-box">
                                                                        <p>
                                                                            ${v.keterangan}
                                                                        </p>
                                                                        <div class="thumbnail-gallery">
                                                                            <a class="img-thumbnail lightbox" href="" data-plugin-options="{ &quot;type&quot;:&quot;image&quot; }">
                                                                                <img class="img-responsive" width="100%" src="" onerror="this.onerror=null;this.src='${SET.apiURL()}lampiran/file/${data.id}/${v.file}';">
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                `
                                                            }).join('')}
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        ${data.verifikasi !== null ? `
                                            <div id="history" class="tab-pane">

                                                ${data.verifikasi !== null ? `
                                                    <div class="card border-0 bg-color-grey">
                                                        <div class="card-body">
                                                            <i class="fa fa-search icons text-color-primary text-8"></i>
                                                            <h4 class="card-title mt-2 mb-1 text-4 font-weight-bold">Telah diverifikasi</h4>
                                                            <p class="card-text">pada ${data.verifikasi.tgl_verifikasi}</p>
                                                        </div>
                                                    </div>
                                                    <br>
                                                ` : ''}

                                                ${data.survey !== null ? `
                                                    <div class="card border-0 bg-color-grey">
                                                        <div class="card-body">
                                                            <i class="fa fa-file icons text-color-primary text-8"></i>
                                                            <h4 class="card-title mt-2 mb-1 text-4 font-weight-bold">Telah disurvey</h4>
                                                            <p class="card-text">pada ${data.survey.tgl_survey}</p>
                                                        </div>
                                                    </div>
                                                    <br>
                                                ` : ''}

                                                ${data.approval !== null ? `
                                                    <div class="card border-0 bg-color-grey">
                                                        <div class="card-body">
                                                            <i class="fa fa-check icons text-color-primary text-8"></i>
                                                            <h4 class="card-title mt-2 mb-1 text-4 font-weight-bold">Telah diapprove</h4>
                                                            <p class="card-text">pada ${data.approval.tgl_approval}</p>
                                                        </div>
                                                    </div>
                                                    <br>
                                                ` : ''}

                                            </div>
                                        ` : ''}

                                    
                                    </div>
                                </div>

                            </div>
                    </div>

                    </div>
                </div>
            `

            $('#results_container').html(html)
        },
        renderNoResults: () => {
            let html = `
                <div class="featured-box featured-box-primary text-left mt-0">
                    <div class="box-content">
                        <h4 class="color-primary font-weight-semibold text-4 text-uppercase mb-3">Hasil Pengecekan</h4>
                        <div class="text-center">
                            <h3>Tidak ditemukan data yang sesuai</h3>
                        </div>
                    </div>
                </div>
            `

            $('#results_container').html(html)
        }
    }
})(settingController);


const pengajuanController = ((SET, UI) => {

    let kredit = [
        {
            id: 1, 
            pinjaman: 10000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 860664.30,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 443206.10,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 304219.37,
                bunga: 6, 
            }]
        },
        {
            id: 2, 
            pinjaman: 15000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 1290996.45,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 664809.15,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 456329.06,
                bunga: 6, 
            }]
        },
        {
            id: 3, 
            pinjaman: 20000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 1721328.59,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 886412.21,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 608438.75,
                bunga: 6, 
            }]
        },
        {
            id: 4, 
            pinjaman: 25000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 2151660.74,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 1108015.26,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 760548.44,
                bunga: 6, 
            }]
        },
        {
            id: 5, 
            pinjaman: 30000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 2581992.89,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 1329618.31,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 912658.12,
                bunga: 6, 
            }]
        },
        {
            id: 6, 
            pinjaman: 35000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 3012325.04,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 1551221.36,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 1064767.81,
                bunga: 6, 
            }]
        },
        {
            id: 7, 
            pinjaman: 40000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 3442657.19,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 17728824.41,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 12168877.50,
                bunga: 6, 
            }]
        },
        {
            id: 8, 
            pinjaman: 45000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 3872989.34,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 1994427.46,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 1368987.19,
                bunga: 6, 
            }]
        },
        {
            id: 9, 
            pinjaman: 50000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 4303321.49,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 2216030.51,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 1521096.87,
                bunga: 6, 
            }]
        },
        {
            id: 10, 
            pinjaman: 55000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 4733653.63,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 2437633.56,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 1673206.56,
                bunga: 6, 
            }]
        },
        {
            id: 11, 
            pinjaman: 60000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 5163985.78,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 2659236.62,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 1825316.25,
                bunga: 6, 
            }]
        },
        {
            id: 12, 
            pinjaman: 65000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 5594317.93,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 2880839.67,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 1977425.93,
                bunga: 6, 
            }]
        },
        {
            id: 13, 
            pinjaman: 70000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 6024650.08,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 3102442.72,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 2129535.62,
                bunga: 6, 
            }]
        },
        {
            id: 14, 
            pinjaman: 75000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 6454982.23,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 3324045.77,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 22881645.31,
                bunga: 6, 
            }]
        },
        {
            id: 15, 
            pinjaman: 80000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 6885314.38,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 3545648.82,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 2433755,
                bunga: 6, 
            }]
        },
        {
            id: 16, 
            pinjaman: 85000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 7315646.53,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 3767251.887,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 2585864.68,
                bunga: 6, 
            }]
        },
        {
            id: 17, 
            pinjaman: 90000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 7745978.67,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 3988854.92,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 2737974.37,
                bunga: 6, 
            }]
        },
        {
            id: 18, 
            pinjaman: 100000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 8606642.97,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 4432061.03,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 3042193.75,
                bunga: 6, 
            }]
        },
        {
            id: 19, 
            pinjaman: 125000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 10758303.71,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 5540076.28,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 3802741.18,
                bunga: 6, 
            }]
        },
        {
            id: 20, 
            pinjaman: 150000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 12909964.46,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 6648091.54,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 4563290.62,
                bunga: 6, 
            }]
        },
        {
            id: 21, 
            pinjaman: 200000000,
            detail: [{
                jangka_waktu: 12,
                angsuran: 17213285.94,
                bunga: 6, 
            }, {
                jangka_waktu: 24,
                angsuran: 8864122.05,
                bunga: 6, 
            }, {
                jangka_waktu: 36,
                angsuran: 6084387.49,
                bunga: 6, 
            }]
        },
    ];

    const _onChangeAngunan = () => {
        $('#angunan').on('change', function(){
            let angunan = $(this).val()
            
            if(angunan === ''){
                $('#nominal').attr('disabled', 'true')
            } else {
                let filtered;

                if (angunan === 'BPKB Motor') {
                    filtered = kredit.filter(v => v.pinjaman <= 25000000);
                } else if (angunan === 'BPKB Mobil') {
                    filtered = kredit.filter(v => v.pinjaman <= 80000000);
                } else {
                    filtered = kredit.filter(v => v.pinjaman <= 200000000);
                }

                _fetchNominal(filtered)
            }
        })
    }

    const _onChangeNominal = () => {
        $('#nominal').on('change', function(){
            let nominal = $(this).val()
            
            if (nominal === ''){
                $('#jangka_waktu').attr('disabled', 'true')
            } else {
                let filtered = kredit.filter(v => v.pinjaman === parseInt(nominal));

                _fetchJangkaWaktu(filtered)
            }
        })
    }

    const _fetchNominal = data => {
        let html = '<option value="">-- Pilih --</option>';
        
        data.forEach(v => {
            html += `<option value="${v.pinjaman}">Rp. ${SET.realCurrency(v.pinjaman)}</option>`
        })

        $('#nominal').removeAttr('disabled')
        $('#nominal').html(html)
    }

    const _fetchJangkaWaktu = data => {
        let html = '<option value="">-- Pilih --</option>';

        data.forEach(v => {
            v.detail.forEach(x => {
                html += `<option value="${x.jangka_waktu}">${x.jangka_waktu} Bulan</option>`
            })
        })

        $('#jangka_waktu').removeAttr('disabled')
        $('#jangka_waktu').html(html)
    }

    const _hitungSimulasi = () => {
        $('#btn_hitung').on('click', function(){
            let angunan = $('#angunan').val()
            let nominal = $('#nominal').val()
            let jangka_waktu = $('#jangka_waktu').val()

            if(angunan === '' || nominal === '' || jangka_waktu === ''){
                alert('Form simulasi harus diisi dengan lengkap')
            } else {
                $('#form_simulasi').removeClass('col-lg-12').addClass('col-lg-8')
                $('#detail_simulasi').show()

                let html = `
                    <div  style="max-height: 280px; overflow-y: scroll">
                        <table class="table">
                            <tr>
                                <th>Bulan</th>
                                <th>Bunga</th>
                                <th>Cicilan</th>
                            </tr>
                `

                kredit.filter(v => v.pinjaman === parseInt(nominal)).forEach(w => {
                    w.detail.filter(x => x.jangka_waktu === parseInt(jangka_waktu)).forEach(y => {
                        for(let i = 1; i <= parseInt(jangka_waktu); i++){
                            html += `
                                <tr>
                                    <td>Ke ${i}</td>
                                    <td>${y.bunga} %</td>
                                    <td>Rp. ${SET.realCurrency(y.angsuran)}</td>
                                </tr>
                            `
                        }

                        $('#angsuran').val(y.angsuran);
                    })
                })

                html += `
                        </table>
                    </div>
                    <button class="btn btn-info btn-block" type="button" id="btn_ajukan">Ajukan</button>
                `
                
                $('#load_detail').html(html)
            }
        })
    }

    const _openPengajuan = () => {
        $('#load_detail').on('click', '#btn_ajukan', function(){
            if (angunan === '' || nominal === '' || jangka_waktu === '') {
                alert('Form simulasi harus diisi dengan lengkap')
            } else {
                $('#form_container').show()
            }
        })
    }

    const _submitAdd = () => {
        $('#form_add').submit(function(e){
            e.preventDefault();
        }).validate({
            errorClass: 'is-invalid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}aplikasi`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        SET.buttonLoader('#btn_submit')
                    },
                    success: res => {
                        toastr.success(`Aplikasi ${res.results.no_aplikasi} berhasil diajukan. Silahkan cek email anda untuk melihat detailnya.`, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/cek_pengajuan`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#btn_submit')
                    }
                })
            }
        })
    }

    const _submitCek = () => {
        $('#form_cek').submit(function(e){
            e.preventDefault();
        }).validate({
            errorClass: 'is-invalid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            submitHandler: form => {
                let email = $('#email').val()
                let no_aplikasi = $('#no_aplikasi').val()

                $.ajax({
                    url: `${SET.apiURL()}aplikasi?email=${email}&no_aplikasi=${no_aplikasi}`,
                    type: 'GET',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        SET.buttonLoader('#btn_submit')
                    },
                    success: res => {
                        if(res.results === null) { 
                            UI.renderNoResults()
                        } else {
                            UI.renderResults(res.results)
                        }
                    },
                    error: ({ responseJSON }) => {
                        // toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#btn_submit')
                    }
                })
            }
        })
    }

    return {
        init: () => {
            $('.dropify').dropify()

            _onChangeAngunan()
            _onChangeNominal()

            _hitungSimulasi()
            _openPengajuan()

            _submitAdd()
        },
        cek: () => {
            _submitCek()
        }
    }
})(settingController, pengajuanUI);

export default pengajuanController;
