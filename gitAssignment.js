Thejas@LAPTOP-8TCUESTN MINGW64 ~
$ mkdir project5_dir

Thejas@LAPTOP-8TCUESTN MINGW64 ~
$ cd project5_dir

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir
$ git init
Initialized empty Git repository in C:/Users/Thejas/project5_dir/.git/

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ touch index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html

nothing added to commit but untracked files present (use "git add" to track)

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git add index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git commit -m "first commit"
[master (root-commit) bbf05f1] first commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ touch info1.txt

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        info1.txt

no changes added to commit (use "git add" and/or "git commit -a")

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ touch .gitignore

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore

no changes added to commit (use "git add" and/or "git commit -a")

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git add index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git commit -m "second commit"
[master 0ed7aca] second commit
 1 file changed, 2 insertions(+)

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git log
commit 0ed7acac1959c86e169783b2fd4c705b7a11d09a (HEAD -> master)
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:49:34 2021 +0530

    second commit

commit bbf05f118c22849988c995d0b80a4c77b86633c7
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:45:18 2021 +0530

    first commit

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git restore index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore

no changes added to commit (use "git add" and/or "git commit -a")

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git add index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore


Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git restore index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore


Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git restore index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git restore --staged index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git restore index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore

nothing added to commit but untracked files present (use "git add" to track)

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git config --global alias.my-add add

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git my-add index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git commit -m "third commit"
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore

nothing added to commit but untracked files present (use "git add" to track)

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git log
commit 0ed7acac1959c86e169783b2fd4c705b7a11d09a (HEAD -> master)
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:49:34 2021 +0530

    second commit

commit bbf05f118c22849988c995d0b80a4c77b86633c7
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:45:18 2021 +0530

    first commit

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git my-add index.html

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git commit -m "third commit"
[master 1d9459c] third commit
 1 file changed, 2 insertions(+), 1 deletion(-)

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git log
commit 1d9459c841a5efd27a8960257385cf955931afec (HEAD -> master)
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:59:48 2021 +0530

    third commit

commit 0ed7acac1959c86e169783b2fd4c705b7a11d09a
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:49:34 2021 +0530

    second commit

commit bbf05f118c22849988c995d0b80a4c77b86633c7
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:45:18 2021 +0530

    first commit

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ ^C


Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git revert
usage: git revert [<options>] <commit-ish>...
   or: git revert <subcommand>

    --quit                end revert or cherry-pick sequence
    --continue            resume revert or cherry-pick sequence
    --abort               cancel revert or cherry-pick sequence
    --skip                skip current commit and continue
    --cleanup <mode>      how to strip spaces and #comments from message
    -n, --no-commit       don't automatically commit
    -e, --edit            edit the commit message
    -s, --signoff         add a Signed-off-by trailer
    -m, --mainline <parent-number>
                          select mainline parent
    --rerere-autoupdate   update the index with reused conflict resolution if possible
    --strategy <strategy>
                          merge strategy
    -X, --strategy-option <option>
                          option for merge strategy
    -S, --gpg-sign[=<key-id>]
                          GPG sign commit


Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ 1d9459c841a5efd27a8960257385cf955931afec
bash: 1d9459c841a5efd27a8960257385cf955931afec: command not found

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git log
commit 1d9459c841a5efd27a8960257385cf955931afec (HEAD -> master)
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:59:48 2021 +0530

    third commit

commit 0ed7acac1959c86e169783b2fd4c705b7a11d09a
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:49:34 2021 +0530

    second commit

commit bbf05f118c22849988c995d0b80a4c77b86633c7
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:45:18 2021 +0530

    first commit

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git revert 1d9459c841a5efd27a8960257385cf955931afec
[master 74723bd] Revert "third commit"
 1 file changed, 1 insertion(+), 2 deletions(-)

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$ git log
commit 74723bd21487d37dbc863ebde46f220d5e85c426 (HEAD -> master)
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 13:02:23 2021 +0530

    Revert "third commit"

    This reverts commit 1d9459c841a5efd27a8960257385cf955931afec.

commit 1d9459c841a5efd27a8960257385cf955931afec
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:59:48 2021 +0530

    third commit

commit 0ed7acac1959c86e169783b2fd4c705b7a11d09a
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:49:34 2021 +0530

    second commit

commit bbf05f118c22849988c995d0b80a4c77b86633c7
Author: Bindushree-byte <61450825+Bindushree-byte@users.noreply.github.com>
Date:   Sun Nov 7 12:45:18 2021 +0530

    first commit

Thejas@LAPTOP-8TCUESTN MINGW64 ~/project5_dir (master)
$
