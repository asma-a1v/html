body {
    height: 100vh;
    margin: 0;
}

#sidebar {
    position: fixed;
    top: 10px;
    left: 10px;
}

#box-container {
    padding-top: 210px;
}

#hour, #minute {
  width: 40px;
  text-align: center;
  margin-right: 2px;
}

.box-content {
  padding-top: 25px;
}

.draggable-box {
  position: absolute;
  background-color: #f1f1f1;
  border: 1px solid #d4d4d4;
  text-align: center;
  padding: 10px;
  cursor: move;
  width: 120px;
  height: 150px; /* この行を変更 */
}

.identifier {
  position: absolute;
  top: 10px;
  left: 10px;
}

.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.info-line {
  border-bottom: 1px dashed #333;
  margin-bottom: 5px;
  padding-bottom: 5px;
  display: inline-block; /* この行を追加 */
  width: 100%; /* この行を追加 */
}

.plate-info {
  line-height: 1.2;
}

input[type="text"]#plate-region,
input[type="text"]#plate-number,
input[type="text"]#plate-hiragana,
input[type="text"]#plate-serial {
    width: auto;
    margin-right: 5px;
}