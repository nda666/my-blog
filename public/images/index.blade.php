@extends('voyager::master')

@section('content')

  <div class="page-content">
    <h1 class="page-title">
      <i class="voyager-watch"></i> {{ __('Master Barang') }}
    </h1>

    @can('admin', 'admin.item')
      <a href="{{ route('admin.item.clone') }}" data-style="expand-left" class="btn ladda-button btn-clone btn-success">
        <div class="ladda-label">
          <i class="voyager-plus"></i>
          <span>{{ __('Sinkron') }}</span>
        </div>
      </a>
    @endcan

    <button type="button" title="Filter" class="btn btn-warning" data-toggle="collapse"
      data-target="#col-filter-datatables" aria-expanded="true"><i class="voyager-search"></i><span class="hidden-xs">
        {{ __('Filter') }}</span>
    </button>

    @include('voyager::alerts')

    <div class="page-content browse container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="alert alert-info" id="info-clone" style="display: none;" role="alert">Mohon tunggu, proses sinkron
            sedang berjalan
          </div>
          <div class="panel panel-bordered">
            <div class="panel-header">
            </div>
            <div class="panel-body">
              {{-- Filter --}}
              <div class="form form-horizontal well collapse in" id="col-filter-datatables" aria-expanded="true"
                style="">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group col-md-12">
                      <label class="col-md-3 control-label">{{ __('Name') }}</label>
                      <div class="col-md-9">
                        <input id="searchNama" type="text" class="form-control">
                      </div>
                    </div>

                    <div class="form-group col-md-12">
                      <label class="col-md-3 control-label">Brand</label>
                      <div class="col-md-9">
                        <select style="width: 100%;" class="form-control select2" id="searchBrand" tabindex="-1"
                          aria-hidden="true">
                          <option value="">{{ __('Semua Brand') }}</option>
                          @foreach ($brand as $key => $value)
                            <option value="{{ $key }}">
                              {{ $value }}</option>
                          @endforeach
                        </select>
                      </div>
                    </div>

                    <div class="form-group col-md-12">
                      <label class="col-md-3 control-label">Sub Brand</label>
                      <div class="col-md-9">
                        <select style="width: 100%;" class="form-control select2" id="searchSubBrand" tabindex="-1"
                          aria-hidden="true">
                          <option value="">{{ __('Semua Sub Brand') }}</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group col-md-12">
                      <label class="col-md-3 control-label">{{ __('Harga') }}</label>
                      <div class="col-md-9">
                        <select style="width: 100%;" class="form-control" id="searchHarga" tabindex="-1"
                          aria-hidden="true">
                          <option value="">{{ __('Tampilkan semua') }}</option>
                          <option value="1">{{ __('Tampilkan Yang Kosong') }}</option>
                          <option value="2">{{ __('Tampilkan Yang Tidak Kosong') }}</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group col-md-12">
                      <label class="col-md-3 control-label">Cicilan</label>
                      <div class="col-md-9">
                        <select style="width: 100%;" id="searchCicilan" class="form-control">
                          <option value="">{{ __('Tampilkan semua') }}</option>
                          <option value="0">{{ __('Tanpa Cicilan') }}</option>
                          <option value="3">{{ trans_choice('Bulan', 3) }}</option>
                          <option value="6">{{ trans_choice('Bulan', 6) }}</option>
                          <option value="12">{{ trans_choice('Bulan', 12) }}</option>
                          <option value="18">{{ trans_choice('Bulan', 18) }}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group col-md-12">
                      <label class="col-md-3 control-label">{{ __('Kategori') }}</label>
                      <div class="col-md-9">
                        <select style="width: 100%;" class="form-control" id="searchKategori" tabindex="-1"`
                          aria-hidden="true">

                          <option data-parent="" value="0">{{ __('Semua Kategori') }}</option>

                          <option data-parent="" value="-1">{{ __('Tidak Ada Kategori') }}</option>

                          @foreach ($categories as $key => $value)
                            <option @if (session('datatables.items.category_id') == $key) selected @endif
                              data-parent="{{ $value['parent'] }}" value="{{ $key }}">{{ $value['label'] }}
                            </option>
                          @endforeach
                        </select>
                      </div>
                    </div>

                    <div class="form-group col-md-12">
                      <label class="col-md-3 control-label">{{ __('Sinkron') }}</label>
                      <div class="col-md-9">
                        <select style="width: 100%;" class="form-control" id="searchHasOffline" tabindex="-1"
                          aria-hidden="true">
                          <option value="">{{ __('Tampilkan semua') }}</option>
                          <option value="1">
                            {{ __('Sudah') }}
                          </option>
                          <option value="0">
                            {{ __('Belum') }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group col-md-12 hidden">
                      <label class="col-md-3 control-label">Duplikat</label>
                      <div class="col-md-9">
                        <div class="checkbox">
                          <label>
                            <input id="searchDuplicate" type="checkbox"> Tampilkan Yang Duplikat
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="form-group col-md-12">
                      <label class="col-md-3 control-label">{{ __('Aktif') }}</label>
                      <div class="col-md-9">
                        <select style="width: 100%;" class="form-control" id="searchActive" tabindex="-1"
                          aria-hidden="true">

                          <option value="1">
                            {{ __('Aktif') }}
                          </option>
                          <option value="0">
                            {{ __('Tidak aktif') }}
                          </option>
                          <option value="">{{ __('Semua') }}</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group col-md-12">
                      <label class="col-md-3 control-label">{{ __('Harga SRP') }}</label>
                      <div class="col-md-9">
                        <select style="width: 100%;" class="form-control" id="searchPrice" tabindex="-1"
                          aria-hidden="true">
                          <option value="">{{ __('Tampilkan Semua') }}</option>
                          <option value="0">
                            {{ __('Tampilkan Yang Belum Di isi') }}
                          </option>
                          <option value="1">
                            {{ __('Tampilkan Yang Sudah Di isi') }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group col-md-12">
                      <label class="col-md-3 control-label">{{ __('Poin') }}</label>
                      <div class="col-md-9">
                        <div class="checkbox">
                          <label>
                            <input id="searchPoin" type="checkbox"> {{ __('Tampilkan yang belum ada poin saja') }}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="form-group  col-md-12">
                      <div class="col-md-offset-3  col-md-9">
                        <button id="cariDatatable" class="btn btn-success btn-block"><i class="fa fa-search"></i>
                          {{ __('Cari') }}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <!-- pencarian -->
                </div>
              </div>

              {{-- /End Filter --}}

              <div class="table-responsive">
                <table id="dataTable" class="table table-hover">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Nama</th>
                      <th>Nama Offline</th>
                      <th>Harga SRP</th>
                      <th>Brand</th>
                      <th>Sub Brand</th>
                      <th>Kategori</th>
                      <th>Barkode</th>
                      <th>Aktif</th>
                      <th>Tanggal Insert</th>
                      <th>ID</th>
                    </tr>
                  </thead>
                </table>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div id="temp_sub_brands" class="hidden">
    @foreach ($sub_brands as $key => $kab)
      @foreach ($kab as $k_key => $k_value)
        <option data-brand="{{ $key }}" value="{{ $k_key }}">{{ $k_value }}</option>
      @endforeach
    @endforeach
  </div>

  {{-- Single delete modal --}}
  <div class="modal modal-danger fade" tabindex="-1" id="delete_modal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"><i class="voyager-trash"></i> Hapus Barang</h4>
        </div>
        <div class="modal-body">
          Kamu yakin untuk menghapus Barang ini?
        </div>
        <div class="modal-footer">

          <form action="{{ url('admin/items/delete') }}" id="delete_form" method="GET">
            {{ csrf_field() }}
            <input type="submit" class="btn btn-danger pull-right delete-confirm"
              value="{{ __('voyager::generic.delete_confirm') }}">
          </form>

          <button type="button" class="btn btn-default pull-right"
            data-dismiss="modal">{{ __('voyager::generic.cancel') }}</button>

        </div>

      </div><!-- /.modal-content -->

    </div><!-- /.modal-dialog -->

  </div><!-- /.modal -->

  <div class="modal fade" id="modal-sinkron-offline">
    <div class="modal-dialog">
      <form action="{{ route('admin.item.save') }}" method="POST">
        <div class="modal-content">

          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Tambah Item</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="col-sm-4 control-label">Nama</label>
              <div class="col-sm-8">
                {{ csrf_field() }}
                <input type="hidden" name="id">
                <input required type="text" id="nama-readonly" name="name" class="form-control">
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="form-group">
              <label class="col-sm-4 control-label">Harga SRP</label>
              <div class="col-sm-8">
                {{ csrf_field() }}
                <input type="hidden" name="id">
                <input required type="text" id="priceInput" name="price" class="form-control">
              </div>
              <div class="clearfix"></div>
            </div>
            {{-- <div class="form-group">
                            <label for="selectBarangOffline" class="col-sm-4 control-label">Barang Offline</label>
                            <div class="col-sm-8">
                                <x-select2-item-paginated name="offline_id" id="selectBarangOffline" />

                            </div>
                            <div class="clearfix"></div>
                        </div> --}}

            {{--

                        <div class="form-group">
                            <label for="selectBarangOffline" class="col-sm-4 control-label">Aktif</label>
                            <div class="col-sm-8">
                                <select required name="active" required id="selectActive" class="form-control select2">
                                    <option value="1">Aktif</option>
                                    <option value="0">Tidak Aktif</option>
                                </select>
                            </div>
                            <div class="clearfix"></div>
                        </div> --}}
            <div class="form-group">
              <label class="col-sm-4 control-label" for="name">Brand</label>
              <div class="col-sm-8">
                <select class="form-control select2" id="input-brand_id" name="brand_id" aria-hidden="true">
                  <option value="" selected>Pilih Brand</option>
                  @foreach ($brand as $key => $value)
                    <option value="{{ $key }}">{{ $value }}</option>
                  @endforeach
                </select>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="form-group">
              <label class="col-sm-4 control-label" for="name">Sub Brand</label>
              <div class="col-sm-8">
                <select class="form-control select2" id="input-sub_brand_id" name="sub_brand_id" aria-hidden="true">
                  <option value="" disabled selected>Pilih Sub Brand</option>
                </select>
              </div>
              <div class="clearfix"></div>
            </div>

            <div class="form-group">
              <label for="category_id" class="col-sm-4 control-label">Kategori:</label>
              <div class="col-sm-8">
                <select name="category_id" autocomplete="off" id="selectCategory" class="form-control select2"
                  style="width: 100%;">
                  <option value="" data-parent="bbo21319023u" disabled selected>Pilih Kategori</option>
                  @foreach ($categories as $key => $value)
                    <option data-parent="{{ $value['parent'] }}" value="{{ $key }}">
                      {{ $value['label'] }}</option>
                  @endforeach
                </select>
              </div>
              <div class="clearfix"></div>
            </div>

            <div class="form-group">
              <label for="selectBarangOffline" class="col-sm-4 control-label">Barcode</label>
              <div class="col-sm-8">
                {{ csrf_field() }}
                <input type="hidden" name="id">
                <input type="text" name="barkode" id="inputBarkode" class="form-control">
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="form-group">
              <label for="selectCicilan" class="col-sm-4 control-label">Cicilan</label>
              <div class="col-sm-8">
                <select name="cicilan" id="selectCicilan" class="form-control select2">
                  <option value="0">Tanpa Cicilan</option>
                  <option value="3">3 {{ trans_choice('Bulan', 3) }}</option>
                  <option value="6">6 {{ trans_choice('Bulan', 6) }}</option>
                  <option value="12">12 {{ trans_choice('Bulan', 12) }}</option>
                  <option value="18">18 {{ trans_choice('Bulan', 18) }}</option>
                </select>
              </div>
              <div class="clearfix"></div>
            </div>

            <div class="form-group">
              <label for="inputPoin" class="col-sm-4 control-label">Poin</label>
              <div class="col-sm-8">
                <input type="number" name="poin" id="inputPoin" class="form-control" value="0">
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </div><!-- /.modal-content -->
      </form>
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->

  <div class="modal fade" tabindex="-1" id="modal-tambah" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title"><i class="voyager-trash"></i> Update Barang</h4>
        </div>
        <div class="modal-body">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#item-tab" aria-controls="item-tab" role="tab"
                data-toggle="tab">Update By Item</a></li>
            <li role="presentation"><a href="#kategori-tab" aria-controls="kategori-tab" role="tab"
                data-toggle="tab">Update By Brand</a></li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content well">
            <div role="tabpanel" class="tab-pane active" id="item-tab">
              <form action="{{ url('admin/items/update_masal') }}" id="formStoreGroupItem" class="form-horizontal "
                method="POST">
                {{ csrf_field() }}

                <div class="form-group">
                  <label for="selectAktif" class="col-sm-2 control-label">Item:</label>
                  <div class="col-sm-10">
                    <select2-item-paginated id="selectItem" name="item_id[]" />

                  </div>
                </div>

                <div class="form-group">
                  <label for="selectCicilanMassal" class="col-sm-2 control-label">Cicilan</label>
                  <div class="col-sm-10">
                    <select name="cicilan" id="selectCicilanMassal" class="form-control select2">
                      <option value="0">Tanpa Cicilan</option>
                      <option value="3">3 {{ trans_choice('Bulan', 3) }}</option>
                      <option value="6">6 {{ trans_choice('Bulan', 6) }}</option>
                      <option value="12">12 {{ trans_choice('Bulan', 12) }}</option>
                      <option value="18">18 {{ trans_choice('Bulan', 18) }}</option>
                    </select>
                  </div>
                  <div class="clearfix"></div>
                </div>

                <div class="form-group">
                  <label for="inputPoinMassal" class="col-sm-2 control-label">Poin</label>
                  <div class="col-sm-10">
                    <input type="number" name="poin" id="inputPoinMassal" class="form-control" value="0">
                  </div>
                  <div class="clearfix"></div>
                </div>

                <div class="form-group">
                  <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary btn-block">Update</button>
                  </div>
                </div>
                <div class="clearfix"></div>
              </form>
            </div>

            <div role="tabpanel" class="tab-pane" id="kategori-tab">
              <form action="{{ url('admin/items/update_masal_by_category') }}" id="formStoreGroupItemByKategori"
                class="form-horizontal " method="POST">
                {{ csrf_field() }}

                <div class="form-group">
                  <label class="col-md-2 control-label">Brand</label>
                  <div class="col-md-10">
                    <select style="width: 100%;" class="form-control select2" id="searchBrandMasal" name="brand"
                      tabindex="-1" aria-hidden="true" required>
                      <option value="">Pilih Brand</option>
                      @foreach ($brand as $key => $value)
                        <option value="{{ $key }}">{{ $value }}</option>
                      @endforeach
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-2 control-label">Sub Brand</label>
                  <div class="col-md-10">
                    <select style="width: 100%;" class="form-control select2" name="sub_brand"
                      id="searchSubBrandMasal" tabindex="-1" aria-hidden="true">
                      <option value="">Semua Sub Brand</option>
                    </select>
                  </div>
                </div>


                <div class="form-group">
                  <label for="selectCicilanByKategori" class="col-sm-2 control-label">Cicilan</label>
                  <div class="col-sm-10">
                    <select name="cicilan" id="selectCicilanByKategori" class="form-control select2">
                      <option value="0">Tanpa Cicilan</option>
                      <option value="3">3 {{ trans_choice('Bulan', 3) }}</option>
                      <option value="6">6 {{ trans_choice('Bulan', 6) }}</option>
                      <option value="12">12 {{ trans_choice('Bulan', 12) }}</option>
                      <option value="18">18 {{ trans_choice('Bulan', 18) }}</option>
                    </select>
                  </div>
                  <div class="clearfix"></div>
                </div>

                <div class="form-group">
                  <label for="inputPoinByKategori" class="col-sm-2 control-label">Poin</label>
                  <div class="col-sm-10">
                    <input type="number" name="poin" id="inputPoinByKategori" class="form-control"
                      value="0">
                  </div>
                  <div class="clearfix"></div>
                </div>

                <div class="form-group">
                  <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary btn-block">Update</button>
                  </div>
                </div>
                <div class="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
@stop



@section('css')

  <style>
    .voyager .nav-tabs>li.active>a:hover {
      background-color: #62a8ea;
    }
  </style>
@stop

@section('javascript')

  <script>
    //PLUGIN EXTENSION
    (function($) {
      $.fn.select2tree = function(options) {
        var defaults = {
          // language: "pt-BR",
          // theme: "bootstrap",
          matcher: matchCustom,
          templateSelection: templateSelectionCustom,
          templateResult: templateResultCustom
        };
        var opts = $.extend(defaults, options);
        var $this = $(this);
        $(this).select2(opts).on("select2:open", function() {
          open($this);
        });
      };

      function templateResultCustom(data, container) {

        if (data.element) {
          //insert span element and add 'parent' property
          var $wrapper = $("<span></span><span>" + data.text + "</span>");
          var $switchSpn = $wrapper.first();
          var $element = $(data.element);
          var $select = $element.parent();
          var $container = $(container);
          if ($element.val()) {
            $container.attr("val", $element.val());
            $container.attr("data-parent", $element.data("parent"));


            var hasChilds = $select.find('option[data-parent="' + $element.val() + '"]').length > 0;
            var isSearching = $(".select2-search__field").val().length > 0;

            if (isSearching) {
              $switchSpn.css({
                "padding": "0 10px 0 10px",
              });
            } else if (hasChilds) {
              $switchSpn.addClass("switch-tree glyphicon");
              if ($switchSpn.hasClass("glyphicon-chevron-right"))
                $switchSpn.removeClass("glyphicon-chevron-right")
                .addClass("glyphicon-chevron-down");
              else
                $switchSpn.removeClass("glyphicon-chevron-down")
                .addClass("glyphicon-chevron-right");

              $switchSpn.css({
                "padding": "0 10px 0 10px",
                "cursor": "pointer"
              });
            }

            if (hasParent($element)) {
              var paddingLeft = getTreeLevel($select, $element.val()) * 2;
              if (!hasChilds) paddingLeft++;
              $container.css("margin-left", paddingLeft + "em");
            }

            return $wrapper;
          }
          return data.text
        } else {
          return data.text;
        }
      };

      function hasParent($element) {
        return $element.data("parent") !== '';
      }

      function getTreeLevel($select, id) {
        var level = 0;
        while ($select.find("option[data-parent!=''][value='" + id + "']").length > 0) {
          id = $select.find("option[value='" + id + "']").data("parent");
          level++;
        }
        return level;
      }

      function moveOption($select, id) {
        if (id) {
          $select.find(".select2-results__options li[data-parent='" + id + "']").insertAfter(
            ".select2-results__options li[val=" + id + "]");
          $select.find(".select2-results__options li[data-parent='" + id + "']").each(function() {
            moveOption($select, $(this).attr("val"));
          });
        } else {

          $(".select2-results__options li[data-parent!='']").css("display", "none");
          $(".select2-results__options li[data-parent='']").appendTo(".select2-results__options ul");
          $(".select2-results__options li[data-parent='']").each(function() {
            moveOption($select, $(this).attr("val"));
          });
        }
      }

      function switchAction($select, id, open) {

        var childs = $(".select2-results__options li[data-parent='" + id + "']");
        //expand childs.
        //childs.each(function() {
        //  switchAction($select, $(this).attr("val"), open);
        //});

        var parent = $(".select2-results__options li[val=" + id + "] span[class]:eq(0)");
        if (open) {
          parent.removeClass("glyphicon-chevron-right")
            .addClass("glyphicon-chevron-down");
          childs.slideDown();
        } else {
          parent.removeClass("glyphicon-chevron-down")
            .addClass("glyphicon-chevron-right");
          childs.slideUp();
        }
      }

      function open($select) {
        setTimeout(function() {

          moveOption($select);
          //override mousedown for collapse/expand
          $(".switch-tree").mousedown(function() {
            switchAction($select, $(this).parent().attr("val"), $(this).hasClass(
              "glyphicon-chevron-right"));
            event.stopPropagation();
          });
          //override mouseup to nothing
          $(".switch-tree").mouseup(function() {
            return false;
          });

        }, 0);
      }

      function matchCustom(params, data) {
        if ($.trim(params.term) === '') {
          return data;
        }
        if (typeof data.text === 'undefined') {
          return null;
        }
        var term = params.term.toLowerCase();
        var $element = $(data.element);
        var $select = $element.parent();
        var childMatched = checkForChildMatch($select, $element, term);
        if (childMatched || data.text.toLowerCase().indexOf(term) >= 0) {
          $("#" + data._resultId).css("display", "unset");
          return data;
        }
        return null;
      }

      function checkForChildMatch($select, $element, term) {
        var matched = false;
        var childs = $select.find('option[data-parent="' + $element.val() + '"]');
        var childMatchFilter = jQuery.makeArray(childs).some(s => s.text.toLowerCase().indexOf(term) >= 0)
        if (childMatchFilter) return true;

        childs.each(function() {
          var innerChild = checkForChildMatch($select, $(this), term);
          if (innerChild) matched = true;
        });

        return matched;
      }

      function templateSelectionCustom(item) {
        if (!item.id || item.id == "-1") {
          return $("<i class='fa fa-hand-o-right'></i><span> " + item.text + "</span>");
        }

        var $element = $(item.element);
        var $select = $element.parent();

        var parentsText = getParentText($select, $element);
        if (parentsText != '') parentsText += ' - ';

        var $state = $(
          "<span> " + parentsText + item.text + "</span>"
        );
        return $state;
      }

      function getParentText($select, $element) {
        var text = '';
        var parentVal = $element.data('parent');
        if (parentVal == '') return text;

        var parent = $select.find('option[value=' + parentVal + ']');

        if (parent) {
          text = getParentText($select, parent);
          if (text != '') text += ' - ';
          text += parent.text();
        }
        return text;
      }
    })(jQuery);

    $(document).ready(function() {

      var searchData

      var table = $('#dataTable').DataTable({
        processing: true,
        serverSide: true,
        order: [
          [1, 'asc']
        ],
        ajax: {
          url: '<?= route('admin.item.datatables') ?>',
          "data": function(d) {
            return $.extend({}, d, {
              'price': $('#searchPrice').val(),
              'nama': $('#searchNama').val(),
              'brand': $('#searchBrand').val(),
              'sub_brand': $('#searchSubBrand').val(),
              'has_offline': $('#searchHasOffline').val(),
              'category': $('#searchKategori').val(),
              'active': $('#searchActive').val(),
              'harga': $('#searchHarga').val(),
              'cicilan': $('#searchCicilan').val(),
              'no_poin': $('#searchPoin').is(':checked') ? 1 : 0,
              'duplicates': $('#searchDuplicate').is(':checked') ? 1 : 0
            });
          }
        },
        dom: 'lrtip',
        columnDefs: [{
          targets: [0],
          searchable: false,
          sortable: false
        }, ],
        columns: [{
            data: 'id',
            name: 'id',
            @can('admin', 'admin.item')
              render: function(val, type, row, meta) {
                return `<button class="btn btn-sm btn-primary btn-edit" data-id="${val}">Ubah</button>`;
                return createDropdown([{
                  label: "Edit",
                  icon: "voyager-edit",
                  attr: {
                    class: 'btn-edit',
                    'data-id': val,
                    'data-index': meta.row
                  }
                }])
              }
            @endcan
          },
          {
            data: 'name',
            name: 'items.name'
          },
          {
            data: 'brgNama',
            name: 'brgNama'
          },
          {
            data: 'price',
            name: 'price',
            render: function(val) {
              return $.number(val, 0);
            }
          },
          {
            data: 'nama_brand',
            name: 'brand.nama'
          },
          {
            data: 'nama_sub_brand',
            name: 'category.name'
          },
          {
            data: 'nama_kategori',
            name: 'new_categories.name'
          },
          {
            data: 'barcode',
            name: 'barcode'
          },
          {
            data: 'active',
            name: 'items.active',
            render: function(act) {
              return act ? 'Aktif' : 'Tidak';
            }
          },
          {
            data: 'created_at',
            name: 'created_at',
            render: function(val) {
              return dayjs(val).format('DD/MM/YYYY HH:mm');
            }
          },
          {
            data: 'id',
            name: 'id'
          },
        ],
        drawCallback: function() {
          var json = this.api().ajax.json();
          console.log(json)
        }
      });

      $('.btn-clone').click(function(e) {
        e.preventDefault();
        var _this = $(this);
        var ladda = Ladda.create(this);
        $('#info-clone').show();
        ladda.start();
        $.ajax({
          url: _this.attr('href'),
          success: function(e) {
            if (e?.result == false) {
              toastr.error(e.message);
            } else {
              toastr.success(e.message);
              table.ajax.reload();
            }
          },
          complete: function() {
            ladda.stop();
            $('#info-clone').hide();
          }
        })
      });

      $('#searchBrand').on('change', function() {
        $('#searchSubBrand').html('');

        var text_brand = $("#searchBrand option:selected").text();
        if ($("#searchBrand option:selected").val() == '') {
          text_brand = '';
        }

        var html_kab = '<option value="">Semua Sub Brand ' + text_brand + '</option>';

        $('#temp_sub_brands [data-brand="' + $(this).val() + '"]').each(function(index, element) {
          html_kab += $(element)[0].outerHTML;
        });

        $('#searchSubBrand').html(html_kab);
      })

      $('#searchBrandMasal').on('change', function() {
        $('#searchSubBrand').html('');

        var text_brand = $("#searchBrandMasal option:selected").text();
        if ($("#searchBrandMasal option:selected").val() == '') {
          text_brand = '';
        }

        var html_kab = '<option value="">Semua Sub Brand ' + text_brand + '</option>';

        $('#temp_sub_brands [data-brand="' + $(this).val() + '"]').each(function(index, element) {
          html_kab += $(element)[0].outerHTML;
        });

        $('#searchSubBrandMasal').html(html_kab);
      })

      $('#input-brand_id').on('change', function() {
        $('#input-sub_brand_id').html('');
        var html_kab = '<option value="" disabled selected>Pilih Sub Brand ' + $(
          "#input-sub_brand_id option:selected").text() + '</option>';

        $('#temp_sub_brands [data-brand="' + $(this).val() + '"]').each(function(index, element) {
          html_kab += $(element)[0].outerHTML;
        });

        $('#input-sub_brand_id').html(html_kab);
      });
      $('#modal-sinkron-offline [name="price"]').number(true, 0);
      $('body').on('click', '.btn-edit', function() {
        var data = table.row($(this).parents('tr')).data();

        $('#modal-sinkron-offline .modal-title').html('Ubah Item');
        $('#modal-sinkron-offline [name="id"]').val(data.id);

        var option = new Option(data.offline_name, data.offline_id, true, true);
        $('#modal-sinkron-offline [name="new_category_id"]').val(data.new_category_id).trigger('change');
        $('#modal-sinkron-offline [name="price"]').val(data.price).trigger('change');
        $('#modal-sinkron-offline [name="brand_id"]').val(data.brand_id).trigger('change');
        $('#modal-sinkron-offline [name="sub_brand_id"]').val(data.category_id).trigger('change');
        $('#modal-sinkron-offline [name="name"]').val(data.name);
        $('#modal-sinkron-offline [name="cicilan"]').val(data.cicilan).trigger('change');
        $('#modal-sinkron-offline [name="barkode"]').val(data.barcode);
        $('#modal-sinkron-offline [name="poin"]').val(data.poin);
        $('#modal-sinkron-offline').modal('show');
      });

      $('#btn-add-new').click(function() {
        $('#modal-sinkron-offline .modal-title').html('Tambah Item');
        $('#modal-sinkron-offline').modal('show');
      });

      $('#modal-sinkron-offline').on('hidden.bs.modal', function() {
        $('#modal-sinkron-offline [name="id"]').val('');
        $('#modal-sinkron-offline [name="name"]').val('');
        $('#modal-sinkron-offline [name="poin"]').val(0);
        $('#modal-sinkron-offline [name="cicilan"]').val(0).trigger('change');
      })

      $('#modal-sinkron-offline form').on('submit', function(e) {
        e.preventDefault();
        var action = $(this).attr('action');
        var formData = $(this).serialize();
        $('#modal-sinkron-offline .with-errors').remove();
        $('#modal-sinkron-offline .form-group').removeClass('has-error');
        $.ajax({
          method: 'POST',
          url: action,
          data: formData,
          success: function(data) {
            if (data.result) {
              toastr.success(data.message)
            } else {
              toastr.error(data.message)
            }
            $('#modal-sinkron-offline').modal('hide')
            table.ajax.reload(null, false)
          },
          error: function(xhr) {
            if (xhr.status == 422 && xhr?.responseJSON?.errors) {
              for (var key in xhr?.responseJSON?.errors) {

                $(`#modal-sinkron-offline [name=${key}]`).closest('.form-group').addClass('has-error');
                $(`#modal-sinkron-offline [name=${key}]`)
                  .parent()
                  .append(
                    `<div class="help-block small with-errors">
                                            ${xhr?.responseJSON?.errors[key]}
                                        </div>`
                  );
              }
            } else {
              toastr.error(xhr?.responseJSON ? xhr?.responseJSON?.message : "Terjadi kesalahan");
            }
          }
        })
      });

      $('#searchKategori').select2({
        width: '100%'
      });

      $("#searchNama").on('keyup', function(e) {
        if (e.keyCode == 13) {
          $("#cariDatatable").click();
        }
      });

      $('#data-table-clear').click(function() {
        $('#col-filter-datatables').find('input, select').each(function(ele, inde) {
          $(ele).val('').trigger('change')
        })
        table.ajax.reload();
      })

      $('body').on('click', '#cariDatatable', function(e) {
        e.preventDefault();
        table.ajax.reload(false)
      })

      var deleteFormAction;
      $('body').on('click', '.delete', function(e) {
        var form = $('#delete_form')[0];
        if (!deleteFormAction) {
          // Save form action initial value
          deleteFormAction = form.action;
        }
        form.action = deleteFormAction.match(/\/[0-9]+$/) ?
          deleteFormAction.replace(/([0-9]+$)/, $(this).data('id')) :
          deleteFormAction + '/' + $(this).data('id');
        $('#delete_modal').modal({
          backdrop: 'static',
          keyboard: false
        }).modal('show');
      });

      $('body').on('submit', '#delete_form', function(e) {
        e.preventDefault();
        var act = $(this).attr('action')
        $('#delete_modal .modal-content').addClass('loading');
        $.ajax({
          method: 'GET',
          url: act,
          success: function(data) {
            if (data) {
              toastr.success(data.message)
            } else {
              toastr.error(data.message)
            }
            $('#delete_modal .modal-content').removeClass('loading');
            table.ajax.reload(null, false);
            $('#delete_modal').modal('hide')
          },
          error: function(jqXHR, exception) {
            toastr.error(jqXHR.responseText)
            $('#delete_modal .modal-content').removeClass('loading');
            table.ajax.reload(null, false);
            $('#delete_modal').modal('hide')
          }
        })
      })

      $('body').on('click', '#data-table-excel', function() {
        var req = new XMLHttpRequest();
        var query = $.param(table.ajax.params());
        req.open("GET", "{{ url('item/export') }}?" + query, true);
        req.responseType = "blob";
        req.onload = function(event) {
          var blob = req.response;
          console.log(blob.size);
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          var filenames_ = "Export Item.xls";
          link.download = filenames_;
          document.body.appendChild(link);
          link.click();
        };

        req.send()
      })

      $("#searchKategori, #selectCategory").select2tree();
      // $("#selectCategory").select2tree();

      $('#formStoreGroupItem, #formStoreGroupItemByKategori').on('submit', function(e) {
        e.preventDefault();
        var action = $(this).attr('action');
        var formData = $(this).serialize();
        $.ajax({
          method: 'POST',
          url: action,
          data: formData,
          success: function(data) {
            if (data.result) {
              toastr.success(data.message)
              // $('#modal-tambah').modal('hide')
              $('#modal-tambah #selectItem, #modal-tambah #selectCategoryByKategori, #modal-tambah #selectCicilanByKategori, #modal-tambah #inputPoinByKategori, #modal-tambah #selectCicilanMassal, #modal-tambah #inputPoinMassal, #modal-tambah #selectCicilanByKategori, #modal-tambah #inputPoinByKategori')
                .val('').trigger('change');
              table.ajax.reload(null, false);
            } else {
              toastr.error(data.message)
            }
            // $('#modal-tambah').modal('hide')
            table.ajax.reload(null, false)
          }
        })
      });
    });
  </script>

@stop
