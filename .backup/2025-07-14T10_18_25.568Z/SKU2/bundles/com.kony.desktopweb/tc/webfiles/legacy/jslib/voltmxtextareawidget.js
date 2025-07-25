
$KW.TextArea = (function() {
    
    

    var module = {
        initialize: function() {
            voltmx.events.addEvent("change", "TextArea", this.eventHandler);
            voltmx.events.addEvent("keyup", "TextArea", this.keyUpEventHandler);
            voltmx.events.addEvent("keydown", "TextArea", this.keyDownEventHandler);
            voltmx.events.addEvent("input", "TextArea", this.textAreaInputEventHandler);
        },

        updateView: function(widgetModel, propertyName, propertyValue, oldPropertyValue) {
            var element = $KU.getNodeByModel(widgetModel);

            $KW.Utils.updateMasterData({
                "widgetModel": widgetModel,
                'widgetNode': element,
                'propertyName': propertyName
            });

            if(!element)
                return;

            switch(propertyName) {
                case "text":
                    if(propertyValue) {
                        const maxLen = widgetModel.maxTextLength;
                        element.value = (typeof maxLen === "number" && maxLen >= 0) ? propertyValue.substring(0, maxLen) : propertyValue;
                        propertyValue && $KU.removeClassName(element, 'voltmxplaceholder');
                    } else {
                        element.value = "";
                    }
                    $KW.TextField.setPlaceholder(widgetModel, element);
                    break;

                case "maxtextlength":
                case "length":
                    if (propertyValue === null) {
                        element.removeAttribute("maxlength");
                    } else if (typeof propertyValue === "number" && propertyValue >= 0) {
                        element.maxLength = propertyValue;
                    } else {
                        throw new Error(`Invalid maxTextLength value: ${propertyValue}`);
                    }
                    break;

                case "placeholder":
                    element.setAttribute("placeholder", propertyValue);
                    $KW.TextField.setPlaceholder(widgetModel, element);
                    break;

                case "placeholderskin":
                    if($KG.appbehaviors[constants.API_LEVEL] >= constants.API_LEVEL_8200) {
                        element.setAttribute("kplaceholderskin", propertyValue);
                    }

                    break;

                case "numberofvisiblelines":
                    element.setAttribute("rows", propertyValue);
                    break;

                    
                case "numberofrows":
                    element.setAttribute("rows", propertyValue);
                    break;

                case "mode":
                case "textinputmode":
                    if(propertyValue == constants.TEXTAREA_INPUT_MODE_ANY)
                        element.setAttribute("type", "text");
                    else if(propertyValue == constants.TEXTAREA_INPUT_MODE_NUMERIC)
                        element.setAttribute("type", "number");
                    break;
                case "textcopyable":
                    if(propertyValue === false) {
                        element.setAttribute('oncopy', 'return false');
                        element.setAttribute('oncut', 'return false');
                        element.setAttribute('onpaste', 'return false');
                    } else {
                        element.removeAttribute('oncopy');
                        element.removeAttribute('oncut');
                        element.removeAttribute('onpaste');
                    }
                    break;
                case "autocapitalize":
                    var value = propertyValue;
                    if($KU.isiPhone && parseInt($KU.getPlatformVersion("iphone")) <= 4 && propertyValue != constants.TEXTAREA_AUTO_CAPITALIZE_NONE) {
                        value = 'on';
                    }
                    element.setAttribute("autocapitalize", value);
                    var transform = $KU.getTextTrasform(widgetModel)
                    transform && (element.style.textTransform = transform);
                    break;

                case "keyboardtype":
                case "keyboardstyle":
                    (textModel.mode != "P") && element.setAttribute("type", propertyValue);
                    break;
            }
        },

        render: function(textAreaModel, context) {
            if(typeof textAreaModel.mode == 'undefined') textAreaModel.mode = textAreaModel.textinputmode;
            var computedSkin = $KW.skins.getWidgetSkinList(textAreaModel, context);
            var phstyle = '';
            var placeholderSkin = textAreaModel.placeholderskin;
            if(placeholderSkin && $KG.appbehaviors[constants.API_LEVEL] >= constants.API_LEVEL_8200) {
                phstyle += "kplaceholderskin = " + placeholderSkin;
            }
            switch(textAreaModel.mode) {
                case constants.TEXTAREA_INPUT_MODE_NUMERIC:
                    type = "number";
                    break;
                default:
                    type = "text";
            }
            if(textAreaModel.keyboardtype) {
                switch(textAreaModel.keyboardtype) {
                    case constants.TEXTAREA_KEY_BOARD_STYLE_EMAIL:
                        type = "email";
                        break;
                    case constants.TEXTAREA_KEY_BOARD_STYLE_URL:
                        type = "url";
                        break;
                    case constants.TEXTAREA_KEY_BOARD_STYLE_CHAT:
                        type = "chat";
                        break;
                    case constants.TEXTAREA_KEY_BOARD_STYLE_DECIMAL:
                    case constants.TEXTAREA_KEY_BOARD_STYLE_NUMBER_PAD:
                        type = "number";
                        break;
                    case constants.TEXTAREA_KEY_BOARD_STYLE_PHONE_PAD:
                        type = "tel";
                        break;
                }
            }
            var text = textAreaModel.text;
            if(!('placeholder' in document.createElement('input'))) {
                computedSkin += ((textAreaModel.placeholder && !textAreaModel.text) ? " voltmxplaceholder " : "");
                text = text || textAreaModel.placeholder || "";
            }
            var style = $KW.skins.getBaseStyle(textAreaModel, context) + $KU.cssPrefix + "text-security:" + (textAreaModel.securetextentry ? "circle;" : "none;") + "resize:none; " + (context.layoutDir && context.ispercent === false ? ";float:" + context.layoutDir : "");

            style += ";text-align:" + $KW.skins.getContentAlignment(textAreaModel) + ";";
            var transform = $KU.getTextTrasform(textAreaModel);
            style += transform ? 'text-transform:' + transform + ';' : '';

            var htmlString = "<textarea" + $KW.Utils.getBaseHtml(textAreaModel, context) + phstyle + " " + "class = '" + computedSkin + "'" + " cols='15' rows='" + textAreaModel.numberofvisiblelines + "' maxlength='" + textAreaModel.maxtextlength + "' style='" + style + "' type = '" + type + "' " + " autocapitalize='" + textAreaModel.autocapitalize + "'";

            if(textAreaModel.maxtextlength && $KU.isIE)
                htmlString += " onpaste='return $KW.TextArea.handlepaste(event, this);' onkeypress='return $KW.TextArea.imposeMaxLength(event, this);'";

            htmlString += " onfocus='$KW.TextField.onfocusEventHandler(arguments[0],this)' onblur='$KW.TextField.onblurEventHandler(arguments[0],this)' ";
            htmlString += (textAreaModel.placeholder) ? " placeholder='" + $KU.escapeHTMLSpecialEntities(textAreaModel.placeholder) + "'" : "";
            htmlString += (textAreaModel.issensitivetext) ? " secure='true'" : "";
            htmlString += (!textAreaModel.textcopyable) ? "oncopy='return false' oncut='return false' onpaste='return false'": "";
            htmlString += ">" + text + "</textarea>";
            return htmlString;
        },

        onblurEventHandler: function(eventObject, target) {
            var textModel = $KU.getModelByNode(target);
            textModel && $KU.onHideKeypad(textModel);
        },

        eventHandler: function(eventObject, target) {
            var textModel = $KU.getModelByNode(target);
            if(textModel) {
                textModel.canUpdateUI = false;
                textModel.text = target.value;
                textModel.canUpdateUI = true;
                spaAPM && spaAPM.sendMsg(textModel, 'ontextchange');
                var textref = $KU.returnEventReference(textModel.ontextchange);
                $KU.callTargetEventHandler(textModel, target, 'ontextchange');
                textref && $KU.onEventHandler(textModel);
            }
        },

        textAreaInputEventHandler: function(eventObject, target) {
            var textModel = $KU.getModelByNode(target);

            $KAR && $KAR.sendRecording(textModel, 'enterText', {'text': target.value, 'target': target, 'eventType': 'uiAction'});
            if(target.getAttribute("kcontainerID")) {
                $KW.Utils.updateContainerData(textModel, target, false, "input");
            } else {
                $KW.Utils.restrictCharactersSet(target, textModel);
            }
        },

        keyUpEventHandler: function(eventObject, target) {
            var textModel = $KU.getModelByNode(target);

            if(textModel) {
                textModel.canUpdateUI = false;
                textModel.text = target.value;
                textModel.canUpdateUI = true;
            }

            if(eventObject.keyCode == 10 || eventObject.keyCode == 13) {
                spaAPM && spaAPM.sendMsg(textModel, 'ondone');
                if(textModel.ondone && textModel) {
                    var textref = $KU.returnEventReference(textModel.done || textModel.ondone);
                    $KU.callTargetEventHandler(textModel, target, 'ondone');
                    textref && $KU.onEventHandler(textModel);
                }
            }
            spaAPM && spaAPM.sendMsg(textModel, 'onkeyup');
            $KU.callTargetEventHandler(textModel, target, 'onkeyup');
        },

        keyDownEventHandler: function(eventObject, target) {
            var textModel = $KU.getModelByNode(target);
            spaAPM && spaAPM.sendMsg(textModel, 'onkeydown');
            $KU.callTargetEventHandler(textModel, target, 'onkeydown');
        }

        , handlepaste: function(event, textareaObj) {
            if(!event)
                event = window.event;
            var model = $KU.getModelByNode(textareaObj);
            var maxLen = model.maxtextlength;
            if(maxLen) {
                var data = window.clipboardData.getData("Text");
                data = textareaObj.innerHTML + data;
                if(data.length > maxLen) {
                    textareaObj.innerHTML = data.substring(0, maxLen);
                    return false;
                }
                return true;
            }
        },

        imposeMaxLength: function(event, element) {
            if(!event)
                event = window.event;
            var model = $KU.getModelByNode(element);
            var maxLen = model.maxtextlength;
            return(element.value.length < maxLen) || (event.keyCode == 8 || event.keyCode == 46 || (event.keyCode >= 35 && event.keyCode <= 40))
        }

    };


    return module;
}());
