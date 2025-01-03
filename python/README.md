# PYTHONPATH 用於指定packeage的安裝位置
  ```bash
  export PYTHONPATH=/Users/kylechang/venv/lib/python3.9/site-packages:$PYTHONPATH
  ```

# Python有些套件在install和import時可能使用不同名稱

- For example, `pylint-pytest`
  - Install:
    ```bash
    pip install pylint-pytest
    ```
  - Import:
    ```python
    import pylint_pytest
    print(pylint_pytest.__file__)
    ```
  - Load plugins:
    ```ini
    [MASTER]
    load-plugins=pylint_pytest
    ```
