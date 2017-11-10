// Generated by CoffeeScript 1.12.7

/*
paste.js is an interface to read data ( text / image ) from clipboard in different browsers. It also contains several hacks.

https://github.com/layerssss/paste.js
 */

(function() {
  var $, Paste, createHiddenEditable, dataURLtoBlob, isFocusable;

  $ = window.jQuery;

  $.paste = function(pasteContainer) {
    var pm;
    if (typeof console !== "undefined" && console !== null) {
      console.log("DEPRECATED: This method is deprecated. Please use $.fn.pastableNonInputable() instead.");
    }
    pm = Paste.mountNonInputable(pasteContainer);
    return pm._container;
  };

  $.fn.pastableNonInputable = function() {
    var el, j, len, ref;
    ref = this;
    for (j = 0, len = ref.length; j < len; j++) {
      el = ref[j];
      if (el._pastable || $(el).is('textarea, input:text, [contenteditable]')) {
        continue;
      }
      Paste.mountNonInputable(el);
      el._pastable = true;
    }
    return this;
  };

  $.fn.pastableTextarea = function() {
    var el, j, len, ref;
    ref = this;
    for (j = 0, len = ref.length; j < len; j++) {
      el = ref[j];
      if (el._pastable || $(el).is(':not(textarea, input:text)')) {
        continue;
      }
      Paste.mountTextarea(el);
      el._pastable = true;
    }
    return this;
  };

  $.fn.pastableContenteditable = function() {
    var el, j, len, ref;
    ref = this;
    for (j = 0, len = ref.length; j < len; j++) {
      el = ref[j];
      if (el._pastable || $(el).is(':not([contenteditable])')) {
        continue;
      }
      Paste.mountContenteditable(el);
      el._pastable = true;
    }
    return this;
  };

  dataURLtoBlob = function(dataURL, sliceSize) {
    var b64Data, byteArray, byteArrays, byteCharacters, byteNumbers, contentType, i, m, offset, ref, slice;
    if (sliceSize == null) {
      sliceSize = 512;
    }
    if (!(m = dataURL.match(/^data\:([^\;]+)\;base64\,(.+)$/))) {
      return null;
    }
    ref = m, m = ref[0], contentType = ref[1], b64Data = ref[2];
    byteCharacters = atob(b64Data);
    byteArrays = [];
    offset = 0;
    while (offset < byteCharacters.length) {
      slice = byteCharacters.slice(offset, offset + sliceSize);
      byteNumbers = new Array(slice.length);
      i = 0;
      while (i < slice.length) {
        byteNumbers[i] = slice.charCodeAt(i);
        i++;
      }
      byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
      offset += sliceSize;
    }
    return new Blob(byteArrays, {
      type: contentType
    });
  };

  createHiddenEditable = function() {
    return $(document.createElement('div')).attr('contenteditable', true).attr('aria-hidden', true).attr('tabindex', -1).css({
      width: 1,
      height: 1,
      position: 'fixed',
      left: -100,
      overflow: 'hidden'
    });
  };

  isFocusable = function(element, hasTabindex) {
    var fieldset, focusableIfVisible, img, map, mapName, nodeName;
    map = void 0;
    mapName = void 0;
    img = void 0;
    focusableIfVisible = void 0;
    fieldset = void 0;
    nodeName = element.nodeName.toLowerCase();
    if ('area' === nodeName) {
      map = element.parentNode;
      mapName = map.name;
      if (!element.href || !mapName || map.nodeName.toLowerCase() !== 'map') {
        return false;
      }
      img = $('img[usemap=\'#' + mapName + '\']');
      return img.length > 0 && img.is(':visible');
    }
    if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
      focusableIfVisible = !element.disabled;
      if (focusableIfVisible) {
        fieldset = $(element).closest('fieldset')[0];
        if (fieldset) {
          focusableIfVisible = !fieldset.disabled;
        }
      }
    } else if ('a' === nodeName) {
      focusableIfVisible = element.href || hasTabindex;
    } else {
      focusableIfVisible = hasTabindex;
    }
    focusableIfVisible = focusableIfVisible || $(element).is('[contenteditable]');
    return focusableIfVisible && $(element).is(':visible');
  };

  Paste = (function() {
    Paste.prototype._target = null;

    Paste.prototype._container = null;

    Paste.mountNonInputable = function(nonInputable) {
      var paste;
      paste = new Paste(createHiddenEditable().appendTo(nonInputable), nonInputable);
      $(nonInputable).on('click', (function(_this) {
        return function(ev) {
          if (!isFocusable(ev.target, false)) {
            return paste._container.focus();
          }
        };
      })(this));
      paste._container.on('focus', (function(_this) {
        return function() {
          return $(nonInputable).addClass('pastable-focus');
        };
      })(this));
      return paste._container.on('blur', (function(_this) {
        return function() {
          return $(nonInputable).removeClass('pastable-focus');
        };
      })(this));
    };

    Paste.mountTextarea = function(textarea) {
      var ctlDown, paste, ref, ref1;
      if ((typeof DataTransfer !== "undefined" && DataTransfer !== null ? DataTransfer.prototype : void 0) && ((ref = Object.getOwnPropertyDescriptor) != null ? (ref1 = ref.call(Object, DataTransfer.prototype, 'items')) != null ? ref1.get : void 0 : void 0)) {
        return this.mountContenteditable(textarea);
      }
      paste = new Paste(createHiddenEditable().insertBefore(textarea), textarea);
      ctlDown = false;
      $(textarea).on('keyup', function(ev) {
        var ref2;
        if ((ref2 = ev.keyCode) === 17 || ref2 === 224) {
          ctlDown = false;
        }
        return null;
      });
      $(textarea).on('keydown', function(ev) {
        var ref2;
        if ((ref2 = ev.keyCode) === 17 || ref2 === 224) {
          ctlDown = true;
        }
        if ((ev.ctrlKey != null) && (ev.metaKey != null)) {
          ctlDown = ev.ctrlKey || ev.metaKey;
        }
        if (ctlDown && ev.keyCode === 86) {
          paste._textarea_focus_stolen = true;
          paste._container.focus();
          paste._paste_event_fired = false;
          setTimeout((function(_this) {
            return function() {
              if (!paste._paste_event_fired) {
                $(textarea).focus();
                return paste._textarea_focus_stolen = false;
              }
            };
          })(this), 1);
        }
        return null;
      });
      $(textarea).on('paste', (function(_this) {
        return function() {};
      })(this));
      $(textarea).on('focus', (function(_this) {
        return function() {
          if (!paste._textarea_focus_stolen) {
            return $(textarea).addClass('pastable-focus');
          }
        };
      })(this));
      $(textarea).on('blur', (function(_this) {
        return function() {
          if (!paste._textarea_focus_stolen) {
            return $(textarea).removeClass('pastable-focus');
          }
        };
      })(this));
      $(paste._target).on('_pasteCheckContainerDone', (function(_this) {
        return function() {
          $(textarea).focus();
          return paste._textarea_focus_stolen = false;
        };
      })(this));
      return $(paste._target).on('pasteText', (function(_this) {
        return function(ev, data) {
          var content, curEnd, curStart;
          curStart = $(textarea).prop('selectionStart');
          curEnd = $(textarea).prop('selectionEnd');
          content = $(textarea).val();
          $(textarea).val("" + content.slice(0, curStart) + data.text + content.slice(curEnd));
          $(textarea)[0].setSelectionRange(curStart + data.text.length, curStart + data.text.length);
          return $(textarea).trigger('change');
        };
      })(this));
    };

    Paste.mountContenteditable = function(contenteditable) {
      var paste;
      paste = new Paste(contenteditable, contenteditable);
      $(contenteditable).on('focus', (function(_this) {
        return function() {
          return $(contenteditable).addClass('pastable-focus');
        };
      })(this));
      return $(contenteditable).on('blur', (function(_this) {
        return function() {
          return $(contenteditable).removeClass('pastable-focus');
        };
      })(this));
    };

    function Paste(_container, _target) {
      this._container = _container;
      this._target = _target;
      this._container = $(this._container);
      this._target = $(this._target).addClass('pastable');
      this._container.on('paste', (function(_this) {
        return function(ev) {
          var clipboardData, file, item, j, k, len, len1, reader, ref, ref1, ref2, ref3, text;
          if (ev.currentTarget !== ev.target) {
            return ev.preventDefault();
          }
          _this._paste_event_fired = true;
          if (((ref = ev.originalEvent) != null ? ref.clipboardData : void 0) != null) {
            clipboardData = ev.originalEvent.clipboardData;
            if (clipboardData.items) {
              ref1 = clipboardData.items;
              for (j = 0, len = ref1.length; j < len; j++) {
                item = ref1[j];
                if (item.type.match(/^image\//)) {
                  reader = new FileReader();
                  reader.onload = function(event) {
                    return _this._handleImage(event.target.result);
                  };
                  try {
                    reader.readAsDataURL(item.getAsFile());
                  } catch (error) {}
                  ev.preventDefault();
                  break;
                }
                if (item.type === 'text/plain') {
                  item.getAsString(function(string) {
                    return _this._target.trigger('pasteText', {
                      text: string
                    });
                  });
                }
              }
            } else {
              if (-1 !== Array.prototype.indexOf.call(clipboardData.types, 'text/plain')) {
                text = clipboardData.getData('Text');
                setTimeout(function() {
                  return _this._target.trigger('pasteText', {
                    text: text
                  });
                }, 1);
              }
              _this._checkImagesInContainer(function(src) {
                return _this._handleImage(src);
              });
            }
          }
          if (clipboardData = window.clipboardData) {
            if ((ref2 = (text = clipboardData.getData('Text'))) != null ? ref2.length : void 0) {
              setTimeout(function() {
                _this._target.trigger('pasteText', {
                  text: text
                });
                return _this._target.trigger('_pasteCheckContainerDone');
              }, 1);
            } else {
              ref3 = clipboardData.files;
              for (k = 0, len1 = ref3.length; k < len1; k++) {
                file = ref3[k];
                _this._handleImage(URL.createObjectURL(file));
              }
              _this._checkImagesInContainer(function(src) {});
            }
          }
          return null;
        };
      })(this));
    }

    Paste.prototype._handleImage = function(src) {
      var loader;
      if (src.match(/^webkit\-fake\-url\:\/\//)) {
        return this._target.trigger('pasteImageError', {
          message: "You are trying to paste an image in Safari, however we are unable to retieve its data."
        });
      }
      this._target.trigger('pasteImageStart');
      loader = new Image();
      loader.crossOrigin = "anonymous";
      loader.onload = (function(_this) {
        return function() {
          var blob, canvas, ctx, dataURL;
          canvas = document.createElement('canvas');
          canvas.width = loader.width;
          canvas.height = loader.height;
          ctx = canvas.getContext('2d');
          ctx.drawImage(loader, 0, 0, canvas.width, canvas.height);
          dataURL = null;
          try {
            dataURL = canvas.toDataURL('image/png');
            blob = dataURLtoBlob(dataURL);
          } catch (error) {}
          if (dataURL) {
            _this._target.trigger('pasteImage', {
              blob: blob,
              dataURL: dataURL,
              width: loader.width,
              height: loader.height
            });
          }
          return _this._target.trigger('pasteImageEnd');
        };
      })(this);
      loader.onerror = (function(_this) {
        return function() {
          _this._target.trigger('pasteImageError', {
            message: "Failed to get image from: " + src,
            url: src
          });
          return _this._target.trigger('pasteImageEnd');
        };
      })(this);
      return loader.src = src;
    };

    Paste.prototype._checkImagesInContainer = function(cb) {
      var img, j, len, ref, timespan;
      timespan = Math.floor(1000 * Math.random());
      ref = this._container.find('img');
      for (j = 0, len = ref.length; j < len; j++) {
        img = ref[j];
        img["_paste_marked_" + timespan] = true;
      }
      return setTimeout((function(_this) {
        return function() {
          var k, len1, ref1;
          ref1 = _this._container.find('img');
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            img = ref1[k];
            if (!img["_paste_marked_" + timespan]) {
              cb(img.src);
              $(img).remove();
            }
          }
          return _this._target.trigger('_pasteCheckContainerDone');
        };
      })(this), 1);
    };

    return Paste;

  })();

}).call(this);

var the_pastePluginCallback;

(function($){
	the_pastePluginCallback = function( editor ) {
		var pasteBtn,
			origDomAdd,
			clipboardHasImage = false,
			currentClipboardEvent = null,
			preventImagePaste = false,
			thepaste = wp.media.thepaste,
			toolbar,
			pasted_image_tmp_prefix = '__pasted_image_tmp_',
			pasted_image_tmp_class = '';

		// default on
		thepaste.options.editor.auto_upload = localStorage.getItem( 'thepaste.auto_upload' ) !== 'false';

		// enable / disable autoupload
		editor.addCommand( 'cmd_thepaste', function() {
			thepaste.options.editor.auto_upload = ! thepaste.options.editor.auto_upload;
			localStorage.setItem( 'thepaste.auto_upload', thepaste.options.editor.auto_upload.toString() );
			pasteBtn.active( thepaste.options.editor.auto_upload );

		});

		// enable / disable autoupload button
		editor.addButton('thepaste', {
			icon: 'thepaste',
			tooltip: thepaste.l10n.upload_pasted_images,
			cmd : 'cmd_thepaste',
			onPostRender: function() {
				pasteBtn = this;
			},
			active:thepaste.options.editor.auto_upload
		});

		// upload button in media toolbar flyout
		editor.addButton('wp_img_thepaste_upload', {
			icon: 'dashicon dashicons dashicons-upload thepaste-upload',
			tooltip: thepaste.l10n.upload_image,
			onclick: function() {
				// wrap img, upload
				var image;
				image = editor.selection.getNode();

				thepaste.uploadImage( image, editor );
			}
		});

		// init media toolbar flyout
		editor.once( 'preinit', function() {
			if ( editor.wp && editor.wp._createToolbar ) {
				toolbar = editor.wp._createToolbar( [
					'wp_img_alignleft',
					'wp_img_aligncenter',
					'wp_img_alignright',
					'wp_img_alignnone',
					'wp_img_thepaste_upload',
					'wp_img_edit',
					'wp_img_remove',
				] );
			}
		} );

		// setup media toolbar flyout on node change
		editor.on( 'wptoolbar', function( event ) {
			var uploadBtn;
			if ( event.element.nodeName === 'IMG' && ! editor.wp.isPlaceholder( event.element ) ) {
				event.toolbar = toolbar;

				uploadBtn = toolbar.$el.find('.thepaste-upload').closest('.mce-btn');

				if ( canUpload( event.element ) ) {
					uploadBtn.show();
				} else {
					uploadBtn.hide();
				}
			}
		} );

		// tru if data source or blob image
		function canUpload( img ) {
			var sub = img.src.substring(0,5);
			return sub === 'blob:' || sub === 'data:';
		}

		// setup media toolbar flyout
		editor
			.on( 'BeforePastePreProcess', function(e){
				// remove svg data
				if (  e.content.match( /&lt;svg[\s\S.]*&lt;\/svg&gt;/i ) ) {
					e.preventDefault();
					e.content = '';
				}
				return e;

			} )
			.on( 'PastePostProcess', function(e){
				// upload image
				var $firstChild, $uploadBox;

				if ( thepaste.options.editor.auto_upload ) {
					$firstChild = $(e.node).children().first();
					if ( $firstChild.is('img') && canUpload( $firstChild.get(0) ) ) {
						$uploadBox = thepaste.uploadImage( $firstChild.get(0), editor );
						$firstChild.remove();
						$(e.node).append( $uploadBox );
					}
				}
			})
			;

	};

	tinymce.PluginManager.add( 'thepaste', the_pastePluginCallback );

} )(jQuery);
