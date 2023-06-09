# 一、什么情况下会产生冲突？

当多个开发者同时使用或者操作 git 中的同一个文件时：
    多个分支代码合并到一个分支；
    多个分支向同一个远端分支推送代码；
push操作的本质就是将本地代码merge到远端分支；同理，pull操作的本质就是将远程分支merge到本地分支。所以在进行这两种操作时，也有可能存在冲突。

有的时候解决了冲突并不意味着万事大吉，因为在某种情况下还会存在逻辑冲突。

例如：用户A修改了函数返回值，用户B依旧使用旧的返回值，虽然成功合并冲突但是却存在着逻辑冲突。


# 二、冲突的解决
产生冲突后，文件系统中冲突的文件里面的内容会变成类似这样：
    ```
        a123
        <<<<<<< HEAD
        b789
        =======
        b45678910
        >>>>>>> 6853e5ff961e684d3a6c02d4d06183b5ff330dcc
        c
    ```
其中：冲突标记<<<<<<< 与 ======= 之间的内容是我的修改 ======= 与 >>>>>>> 之间的内容是别人的修改。

可以根据情况保留修改：

保留自己的：
删除======= 与 >>>>>>> 之间的内容，然后删除<<<<<<<

保留别人的：
删除<<<<<<< 与 ======= 之间的内容，然后删除>>>>>>>

都保留：
删除<<<<<<< 、 =======、>>>>>>>

修改完之后，执行：

    git add 冲突文件名
    git commit -m "xxx"
    git push  //直接push就可以了，因为刚刚已经执行过相关merge操作了


1.前提条件：不能在 master 分支上修改任何文件。master 分支的变更只能通过 git pull 和 git merge 获得。
2.我们自己有一个分支用来修改代码，例如我的分支叫做dev分支。我把代码修改完成了，现在不知道有没有冲突。
3.在 dev 分支里面，执行命令git merge origin/master，把远程的master分支合并到当前dev分支中。
4.如果没有任何报错，那么直接转到第5步。 如果有冲突，根据提示，把冲突解决，保存文件。然后执行命令git add xxx把你修改的文件添加到缓存区。然后执行命令git commit -m "xxx"添加 commit 信息。
5.执行如下命令，切换到 master 分支：git checkout master。
6.执行命令git pull确保当前 master 分支是最新代码。
7.把dev分支的代码合并回 master 分支：git merge dev。
8.提交代码：git push。


# 三、撤销合并
若冲突处理不到位，或者不想合并等等其他因素想要撤销合并，可以在控制台输入‘git reset --hard‘命令，合并操作就会被安全的撤销，并返回到你开始合并之前的状态。

</body>
</html>