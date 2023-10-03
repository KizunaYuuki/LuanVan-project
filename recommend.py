import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
import numpy as np

# Tạo dữ liệu
data = pd.DataFrame({
    "Tuổi": [2, 3, 4, 5, 6, 7, 8, 9, 10],
    "Sản phẩm": ["Xe ô tô đồ chơi", "Nhà búp bê", "Đồ chơi ghép hình", "Đồ chơi lắp ráp", "Đồ chơi búp bê", "Đồ chơi xây dựng", "Đồ chơi điện tử", "Đồ chơi thể thao", "Đồ chơi âm nhạc"]
})

# Tách dữ liệu thành tập huấn luyện và tập kiểm tra
X_train, X_test, y_train, y_test = train_test_split(data[["Tuổi"]].values, data["Sản phẩm"], test_size=0.25)

# Tạo mô hình cây quyết định
model = DecisionTreeClassifier()

# Huấn luyện mô hình
model.fit(X_train, y_train)

# Cung cấp tên thuộc tính cho tập dữ liệu dự đoán
prediction = model.predict([[5]])

# In kết quả dự đoán
print(prediction)